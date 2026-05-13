import { Router } from "express";
import { handleContactForm } from "../controllers/contactController.js";
import { handleChat } from "../controllers/chatbotController.js";

const router = Router();

// Health check
router.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Backend systems operational" });
});

// Chatbot endpoint
router.post("/chat", handleChat);

// Contact form endpoint
router.post("/contact", handleContactForm);

// Example API route
router.get("/profile", (req, res) => {
  res.json({
    name: "Yash Panchal",
    role: "Full-Stack Developer",
    status: "Active"
  });
});

export default router;
