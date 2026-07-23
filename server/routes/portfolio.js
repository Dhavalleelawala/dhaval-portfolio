import express from "express";
import { skills, featuredProjects, experience, socials, profile, stack } from "../data/portfolio.js";

const router = express.Router();

router.get("/stack", (_req, res) => {
  res.json(stack);
});

router.get("/profile", (_req, res) => {
  res.json(profile);
});

router.get("/socials", (_req, res) => {
  res.json(socials);
});

router.get("/skills", (_req, res) => {
  res.json(skills);
});

router.get("/projects", (_req, res) => {
  res.json(featuredProjects);
});

router.get("/experience", (_req, res) => {
  res.json(experience);
});

export default router;
