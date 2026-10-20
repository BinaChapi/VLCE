# Village of Light — Vite website + content API + admin CMS

The public website reads its content from published database sections through the API; it does not fall back to bundled content when the API or database is unavailable. `src/content.ts` provides the initial content imported by the seed script and the TypeScript content shape. The API stores top-level sections as PostgreSQL JSONB, preserving nested fields and English/Amharic values without flattening or losing array order. The admin dashboard at `/admin` uses a left-hand navigation for Home, About, Programs, Impact & statistics, Contact, Donate, Brand, SEO, Navigation and other content sections.

## Stack

- Existing Vite + React + TypeScript public site
- Express + TypeScript REST API (`server/`)
- Neon PostgreSQL + Prisma (`ContentSection` stores a complete nested section as JSONB)
- Cloudinary image uploads (secure URL returned by Cloudinary and saved into the section when you save)
- Admin login protected by a signed JWT; no public write endpoints

## 1. Configure the API

```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your Neon connection string and credentials. For Neon, use the connection string supplied by Neon and include `sslmode=require`. A pooled connection URL is usually appropriate for serverless deployment; use the direct connection string for migrations if your Neon setup provides one.

Set the following server-only environment variables:

- `DATABASE_URL`: Neon PostgreSQL connection string
- `JWT_SECRET`: a unique random secret at least 32 characters long
- `ADMIN_EMAIL`: admin sign-in email
- `ADMIN_PASSWORD_HASH`: bcrypt hash of your password, never the plain password
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
- `CORS_ORIGINS`: comma-separated exact frontend origins

Generate a bcrypt hash after installing dependencies:

```bash
cd server
node -e "require('bcryptjs').hash('Use-A-Strong-Password-Here', 12).then(console.log)"
```

Copy the resulting hash into `ADMIN_PASSWORD_HASH`. Replace the sample `JWT_SECRET` with a strong random secret. Never put database, JWT, or Cloudinary API secrets in a `VITE_` variable; those are exposed to the browser.

## 2. Install, create the database table, and import the content

From the repository root:

```bash
npm install
npm install --prefix server
npm run db:generate
npm run db:push
npm run db:seed
```

`db:seed` imports the current `src/content.ts` into the database. It is deliberately idempotent: if a section already exists, it will **not** overwrite your saved CMS changes. To re-import original starter content, back up the database and explicitly edit/delete the relevant database section before seeding again.

For an existing database, `npm run db:backfill-footer-socials --prefix server` adds the official social links to the existing footer section only if that field is missing. It preserves the rest of the saved footer data and leaves an existing social links list unchanged.

## 3. Start frontend and API

Run both in separate terminals:

```bash
# Terminal 1, repository root
npm run dev

# Terminal 2, repository root
npm run dev:api
```

Or use `npm run dev:full` to run both together. Vite proxies `/api` requests to `http://localhost:3001` by default. Set `VITE_API_PROXY_TARGET` if your local API runs elsewhere.

Open:

- Public website: `http://localhost:5173`
- Admin CMS: `http://localhost:5173/admin`
- API health: `http://localhost:3001/api/v1/health`

The public website requests `/api/v1/content` before rendering public pages. It shows a loading state while the request is pending and an error with a retry option if the API/database is unavailable or required published sections are missing. The admin route remains accessible without loading public content. Existing routes and EN/AM language switching remain in place.

The admin editor reads sections directly from the database, groups pages separately from site settings, and provides search across sections and field content. Nested objects and lists are collapsible; edit changes must be saved before they appear on the public site. The publish control updates a section's database status; required site-wide sections cannot be unpublished because every public page depends on them.

## 4. Image workflow

In the admin editor, find a field marked `IMAGE URL`, choose an image, and wait for the upload to finish. The API validates the file type and size, sends it to Cloudinary in the `vlce/content` folder, and returns Cloudinary's `secure_url`. The URL is placed in the field and is persisted to Neon when you click **Save changes** or **Save section**. Configure Cloudinary credentials on the server first. Allowed formats: JPG, PNG, WEBP, GIF and AVIF; default max upload is 10 MB (`MAX_UPLOAD_MB`).

## API routes

Public:

- `GET /api/v1/health`
- `GET /api/v1/content` — all published sections with bilingual nested values
- `GET /api/v1/content/:key` — one published section

Admin (requires `Authorization: Bearer <token>`):

- `POST /api/v1/auth/login`
- `GET /api/v1/admin/sections`
- `GET /api/v1/admin/sections/:key`
- `PUT /api/v1/admin/sections/:key` — save a complete nested section
- `PATCH /api/v1/admin/sections/:key/published`
- `POST /api/v1/admin/images` — multipart form field named `image`

## Build

```bash
npm run build
npm run build:api
```

Before deploying, set all environment variables in your hosting provider, run Prisma generate/push as appropriate, seed the initial content, and configure CORS to your production frontend domain. Deploy the Express API as a separate Node service and point the Vite app's `VITE_API_BASE_URL` at the API base URL (for example `https://api.example.org/api/v1`). If the frontend and API are deployed on separate domains, add the exact frontend origin to `CORS_ORIGINS`.

## SEO and deployment

The production frontend build writes page-specific titles, descriptions, canonical URLs, Open Graph/Twitter previews, and JSON-LD into static HTML for `/`, `/about`, `/programs`, `/impact`, `/contact`, and `/donate`. It marks `/admin` as `noindex` and creates the matching `sitemap.xml` and `robots.txt`. The React SEO component updates metadata after the published CMS content loads; the static page metadata comes from the English defaults in `src/content.ts`, so rebuild and redeploy the frontend after editing SEO metadata in the CMS.

After deploying:

1. Open each public page directly and check **View page source** (not only the browser Elements panel). Confirm its `<title>`, description, canonical URL, social tags, and JSON-LD are present and specific to that page.
2. Visit `https://YOUR_DOMAIN/robots.txt` and `https://YOUR_DOMAIN/sitemap.xml`. Confirm the sitemap URLs use your production domain and include only public pages.
3. In Google Search Console, add and verify your domain property, then submit `https://YOUR_DOMAIN/sitemap.xml` under **Sitemaps**. Use **URL inspection** to request indexing for the home page and key routes. Indexing and rankings take time and are not guaranteed.
4. If you use a custom domain instead of the current Vercel domain, update `SITE_URL` in `src/site.ts`, then rebuild and redeploy. Configure that domain as the production frontend origin in the API's `CORS_ORIGINS` as well.

The public pages currently switch between English and Amharic at the same URL, so search engines receive one canonical URL per page rather than separate language URLs. For independently indexed language versions, add language-specific URLs before publishing `hreflang` links.
