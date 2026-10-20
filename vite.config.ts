import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv, type Plugin } from "vite";
import { content, defaultSocialLinks } from "./src/content.js";
import { SITE_URL } from "./src/site.js";

const seoRoutes = [
  { path: "/", key: "home", changefreq: "weekly", priority: "1.0" },
  { path: "/about", key: "about", changefreq: "monthly", priority: "0.8" },
  { path: "/programs", key: "programs", changefreq: "monthly", priority: "0.9" },
  { path: "/impact", key: "impact", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", key: "contact", changefreq: "yearly", priority: "0.6" },
  { path: "/donate", key: "donate", changefreq: "monthly", priority: "0.9" },
] as const;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function staticSeoPages(): Plugin {
  let outputDirectory = "";

  return {
    name: "static-seo-pages",
    apply: "build",
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const template = await readFile(resolve(outputDirectory, "index.html"), "utf8");

      for (const route of seoRoutes) {
        const metadata = content.meta[route.key];
        const title = metadata.title.en;
        const description = metadata.description.en;
        const canonical = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
        const schema = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description,
          url: canonical,
          inLanguage: "en",
          isPartOf: {
            "@type": "WebSite",
            name: content.brand.full.en,
            url: SITE_URL,
          },
          publisher: {
            "@type": "Organization",
            name: content.brand.full.en,
            url: SITE_URL,
            logo: {
              "@type": "ImageObject",
              url: new URL(content.brand.logo, SITE_URL).href,
            },
            sameAs: defaultSocialLinks.map((link) => link.url),
          },
        };

        let html = template;
        const replacements: Record<string, string> = {
          __SEO_TITLE__: escapeHtml(title),
          __SEO_DESCRIPTION__: escapeHtml(description),
          __SEO_SITE_NAME__: escapeHtml(content.brand.full.en),
          __SEO_CANONICAL__: escapeHtml(canonical),
          __SEO_IMAGE__: escapeHtml(new URL(content.brand.socialImage, SITE_URL).href),
          __SEO_SCHEMA__: JSON.stringify(schema).replace(/</g, "\\u003c"),
        };
        for (const [token, value] of Object.entries(replacements)) {
          html = html.split(token).join(value);
        }

        const filePath =
          route.path === "/"
            ? resolve(outputDirectory, "index.html")
            : resolve(outputDirectory, route.path.slice(1), "index.html");
        await mkdir(resolve(filePath, ".."), { recursive: true });
        await writeFile(filePath, html);
      }

      const adminHtml = template
        .replaceAll("__SEO_TITLE__", "Admin | Village of Light")
        .replaceAll("__SEO_DESCRIPTION__", "Village of Light administration.")
        .replaceAll("__SEO_SITE_NAME__", escapeHtml(content.brand.full.en))
        .replaceAll("__SEO_CANONICAL__", `${SITE_URL}/admin`)
        .replaceAll("__SEO_IMAGE__", escapeHtml(new URL(content.brand.socialImage, SITE_URL).href))
        .replace("__SEO_SCHEMA__", "{}")
        .replace(
          '<meta name="robots" content="index, follow" />',
          '<meta name="robots" content="noindex, nofollow" />',
        )
        .replace(/<link rel="canonical"[^>]*\/>\s*/, "")
        .replace(/<script type="application\/ld\+json">\{\}<\/script>\s*/, "");
      await mkdir(resolve(outputDirectory, "admin"), { recursive: true });
      await writeFile(resolve(outputDirectory, "admin", "index.html"), adminHtml);

      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...seoRoutes.flatMap((route) => [
          "  <url>",
          `    <loc>${SITE_URL}${route.path === "/" ? "/" : route.path}</loc>`,
          `    <changefreq>${route.changefreq}</changefreq>`,
          `    <priority>${route.priority}</priority>`,
          "  </url>",
        ]),
        "</urlset>",
        "",
      ].join("\n");
      await writeFile(resolve(outputDirectory, "sitemap.xml"), sitemap);
      await writeFile(
        resolve(outputDirectory, "robots.txt"),
        `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      );
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tailwindcss(), staticSeoPages()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_PROXY_TARGET || "http://localhost:3001",
          changeOrigin: true,
        },
      },
    },
  };
});
