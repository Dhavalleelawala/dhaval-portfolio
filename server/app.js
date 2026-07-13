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
  res.json({ status: "ok", message: "Dhaval Portfolio API is running" });
});

app.use("/api/contact", contactRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/portfolio", portfolioRoutes);

let dbConnected = false;

export async function connectDB() {
  if (dbConnected || mongoose.connection.readyState === 1) return;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn("MONGODB_URI not set — contact form will use in-memory storage");
    return;
  }

  try {
    await mongoose.connect(uri);
    dbConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.warn("MongoDB connection failed:", error.message);
  }
}

app.use(async (_req, _res, next) => {
  await connectDB();
  next();
});

export default app;
