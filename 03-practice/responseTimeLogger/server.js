import express from "express";
import { responseTimeLogger } from "./responseTimeLogger.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(responseTimeLogger);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome Home!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
