import "dotenv/config";
import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { z } from "zod";
import { prisma } from "./db.js";
import { requireAdmin } from "./auth.js";
import { requiredContentSections } from "../../src/contentSections.js";

// Inside your existing startup function:
await prisma.$connect();

const app = express();
const port = Number(process.env.PORT || 3001);
const allowedOrigins = (process.env.CORS_ORIGINS || "http://localhost:5173")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const sectionKeySchema = z.string().regex(/^[a-zA-Z][a-zA-Z0-9_-]{0,63}$/);
app.disable("x-powered-by");
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(
  cors({
    origin(origin, cb) {
      if (!origin || allowedOrigins.includes(origin)) cb(null, true);
      else cb(new Error("Origin is not allowed"));
    },
  }),
);
app.use(express.json({ limit: "2mb" }));
app.use(
  "/api",
  rateLimit({
    windowMs: 60_000,
    limit: 180,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  }),
);
app.use(
  "/api/v1/auth/login",
  rateLimit({
    windowMs: 15 * 60_000,
    limit: 8,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  }),
);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize:
      Math.max(1, Number(process.env.MAX_UPLOAD_MB || 10)) * 1024 * 1024,
  },
  fileFilter(_req, file, cb) {
    if (
      ![
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/gif",
        "image/avif",
      ].includes(file.mimetype)
    )
      cb(new Error("Only JPG, PNG, WEBP, GIF, and AVIF images are allowed"));
    else cb(null, true);
  },
});
const asyncRoute =
  (fn: (req: Request, res: Response) => Promise<unknown>) =>
  (req: Request, res: Response, next: NextFunction) => {
    void fn(req, res).catch(next);
  };
const safeSection = async (key: string) =>
  prisma.contentSection.findUnique({ where: { key } });

app.get("/api/v1/health", (_req, res) =>
  res.json({ success: true, data: { status: "ok" } }),
);

// Public read-only content endpoints. Data retains the exact nested EN/AM structure from src/content.ts.
app.get(
  "/api/v1/content",
  asyncRoute(async (_req, res) => {
    const rows = await prisma.contentSection.findMany({
      where: { published: true },
      orderBy: { key: "asc" },
    });
    const data = Object.fromEntries(rows.map((row) => [row.key, row.data]));
    res.setHeader(
      "Cache-Control",
      "public, max-age=30, stale-while-revalidate=120",
    );
    res.json({ success: true, data });
  }),
);
app.get(
  "/api/v1/content/:key",
  asyncRoute(async (req, res) => {
    const parsed = sectionKeySchema.safeParse(req.params.key);
    if (!parsed.success) {
      res
        .status(400)
        .json({ success: false, error: { message: "Invalid section key" } });
      return;
    }
    const row = await safeSection(parsed.data);
    if (!row || !row.published) {
      res.status(404).json({
        success: false,
        error: { message: "Content section not found" },
      });
      return;
    }
    res.json({
      success: true,
      data: { key: row.key, data: row.data, updatedAt: row.updatedAt },
    });
  }),
);

app.post(
  "/api/v1/auth/login",
  asyncRoute(async (req, res) => {
    const input = z
      .object({
        email: z.string().email().max(254),
        password: z.string().min(1).max(200),
      })
      .safeParse(req.body);
    if (!input.success) {
      res.status(400).json({
        success: false,
        error: { message: "Enter a valid email and password." },
      });
      return;
    }
    const email = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
    const hash = process.env.ADMIN_PASSWORD_HASH || "";
    const secret = process.env.JWT_SECRET || "";
    if (!email || !hash.startsWith("$2") || secret.length < 32) {
      res.status(503).json({
        success: false,
        error: {
          message:
            "Admin login is not configured. Set ADMIN_EMAIL, ADMIN_PASSWORD_HASH and a 32+ character JWT_SECRET.",
        },
      });
      return;
    }
    const valid =
      input.data.email.toLowerCase() === email &&
      (await bcrypt.compare(input.data.password, hash));
    if (!valid) {
      res.status(401).json({
        success: false,
        error: { message: "Email or password is incorrect." },
      });
      return;
    }
    const token = jwt.sign({ email, role: "admin" }, secret, {
      expiresIn: "8h",
      issuer: "vlce-api",
      audience: "vlce-admin",
    });
    res.json({ success: true, data: { token, email, expiresIn: 28800 } });
  }),
);

app.use("/api/v1/admin", requireAdmin);
app.get(
  "/api/v1/admin/sections",
  asyncRoute(async (_req, res) => {
    const rows = await prisma.contentSection.findMany({
      orderBy: { key: "asc" },
      select: { key: true, published: true, updatedAt: true },
    });
    res.json({ success: true, data: rows });
  }),
);
app.get(
  "/api/v1/admin/sections/:key",
  asyncRoute(async (req, res) => {
    const parsed = sectionKeySchema.safeParse(req.params.key);
    if (!parsed.success) {
      res
        .status(400)
        .json({ success: false, error: { message: "Invalid section key" } });
      return;
    }
    const row = await safeSection(parsed.data);
    if (!row) {
      res.status(404).json({
        success: false,
        error: { message: "Content section not found" },
      });
      return;
    }
    res.json({ success: true, data: row });
  }),
);
app.put(
  "/api/v1/admin/sections/:key",
  asyncRoute(async (req, res) => {
    const parsed = sectionKeySchema.safeParse(req.params.key);
    const body = z
      .object({ data: z.unknown(), published: z.boolean().optional() })
      .safeParse(req.body);
    if (!parsed.success || !body.success) {
      res.status(400).json({
        success: false,
        error: { message: "Provide a valid section key and data object." },
      });
      return;
    }
    if (body.data.data === null || typeof body.data.data !== "object") {
      res.status(400).json({
        success: false,
        error: { message: "Section data must be an object or array." },
      });
      return;
    }
    const row = await prisma.contentSection.upsert({
      where: { key: parsed.data },
      create: {
        key: parsed.data,
        data: body.data.data as never,
        published: body.data.published ?? true,
      },
      update: {
        data: body.data.data as never,
        ...(body.data.published !== undefined
          ? { published: body.data.published }
          : {}),
      },
    });
    res.json({ success: true, data: row });
  }),
);
app.patch(
  "/api/v1/admin/sections/:key/published",
  asyncRoute(async (req, res) => {
    const key = sectionKeySchema.safeParse(req.params.key);
    const body = z.object({ published: z.boolean() }).safeParse(req.body);
    if (!key.success || !body.success) {
      res.status(400).json({
        success: false,
        error: {
          message: "Provide a valid section key and published boolean.",
        },
      });
      return;
    }
    if (
      !body.data.published &&
      requiredContentSections.some((sectionKey) => sectionKey === key.data)
    ) {
      res.status(409).json({
        success: false,
        error: {
          message: "Required website content sections cannot be unpublished.",
        },
      });
      return;
    }
    const row = await prisma.contentSection.update({
      where: { key: key.data },
      data: { published: body.data.published },
    });
    res.json({ success: true, data: row });
  }),
);
app.post(
  "/api/v1/admin/images",
  upload.single("image"),
  asyncRoute(async (req, res) => {
    if (!req.file) {
      res.status(400).json({
        success: false,
        error: { message: "Choose an image file first." },
      });
      return;
    }
    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      res.status(503).json({
        success: false,
        error: { message: "Cloudinary is not configured on the server." },
      });
      return;
    }
    const dataUri = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "vlce/content",
      resource_type: "image",
      use_filename: true,
      unique_filename: true,
    });
    res.status(201).json({
      success: true,
      data: {
        url: result.secure_url,
        publicId: result.public_id,
        width: result.width,
        height: result.height,
        format: result.format,
      },
    });
  }),
);

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  const message =
    err instanceof Error ? err.message : "Unexpected server error";
  const status =
    message === "Origin is not allowed"
      ? 403
      : message.toLowerCase().includes("file size")
        ? 413
        : message.startsWith("Only JPG")
          ? 415
          : 500;
  res.status(status).json({
    success: false,
    error: {
      message:
        status === 500 && process.env.NODE_ENV === "production"
          ? "Unexpected server error"
          : message,
    },
  });
});

if (!Number.isInteger(port) || port < 1 || port > 65535)
  throw new Error("PORT must be a valid port number");
const server = app.listen(port, () =>
  console.log(`VLCE API listening on http://localhost:${port}`),
);
const shutdown = () => {
  server.close(() => {
    void prisma.$disconnect().finally(() => process.exit(0));
  });
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
