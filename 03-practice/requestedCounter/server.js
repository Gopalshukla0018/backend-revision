// server.js

import express from "express";
import { requestCounter } from "./requestCounter.js";

const app = express();
const PORT = 5000;

// Use the middleware
app.use(requestCounter);

app.get("/", (req, res) => {
  res.send("Welcome! This is the home route.");
});

app.get("/about", (req, res) => {
  res.send("This is the about route.");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
