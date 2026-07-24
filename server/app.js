import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contact.js";
import githubRoutes from "./routes/github.js";
import portfolioRoutes from "./routes/portfolio.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://dhavalleelawala.xyz",
  "https://www.dhavalleelawala.xyz",
  process.env.CLIENT_URL,
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : null,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== "production") {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "Dhaval Portfolio API is running",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

app.use("/api/contact", contactRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/portfolio", portfolioRoutes);

const globalForMongoose = globalThis;

if (!globalForMongoose._mongooseCache) {
  globalForMongoose._mongooseCache = { conn: null, promise: null };
}

const mongooseCache = globalForMongoose._mongooseCache;

export async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn("MONGODB_URI not set — contact form will use in-memory storage");
    return null;
  }

  if (mongooseCache.conn) {
    return mongooseCache.conn;
  }

  if (!mongooseCache.promise) {
    mongooseCache.promise = mongoose.connect(uri, {
      dbName: "portfolio_db",
      serverSelectionTimeoutMS: 10000,
      maxPoolSize: 10,
    });
  }

  try {
    mongooseCache.conn = await mongooseCache.promise;
    console.log("MongoDB Atlas connected");
    return mongooseCache.conn;
  } catch (error) {
    mongooseCache.promise = null;
    console.warn("MongoDB connection failed:", error.message);
    return null;
  }
}

app.use(async (_req, _res, next) => {
  await connectDB();
  next();
});

export default app;
