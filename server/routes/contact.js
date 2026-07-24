import express from "express";
import mongoose from "mongoose";
import Contact from "../models/Contact.js";

const router = express.Router();
const memoryStore = [];

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    if (mongoose.connection.readyState === 1) {
      const contact = await Contact.create({ name, email, subject, message });
      return res.status(201).json({
        success: true,
        message: "Message sent successfully!",
        id: contact._id,
      });
    }

    memoryStore.unshift({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

router.get("/", async (_req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const messages = await Contact.find().sort({ createdAt: -1 }).limit(50);
      return res.json(messages);
    }
    res.json(memoryStore);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

export default router;
