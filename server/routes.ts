import { Router } from "express";

const router = Router();

// Health check
router.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Backend systems operational" });
});

// Example API route
router.get("/profile", (req, res) => {
  res.json({
    name: "Yash Panchal",
    role: "Full-Stack Developer",
    status: "Active"
  });
});

export default router;
