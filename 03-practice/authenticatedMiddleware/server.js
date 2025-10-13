import express from "express";
import { isAuthenticated } from "./isAuthenticated.js";

const app = express();
const PORT = 5000;

// Public route
app.get("/public", (req, res) => {
  res.send("This is a public route. Anyone can access.");
});

// Protected route
app.get("/dashboard", isAuthenticated, (req, res) => {
  res.send("Welcome to your dashboard! Only authenticated users can see this.");
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
