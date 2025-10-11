import express from "express";
import cors from "cors";
import morgan from "morgan";

import { logger } from "./middlewares/logger.js";
import { ipLogger } from "./middlewares/ipLogger.js";
import { requestTimer } from "./middlewares/requestTimer.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { rateLimiter } from "./middlewares/rateLimiter.js";
import { maintenanceMode } from "./middlewares/maintenanceMode.js";

const app = express();
const PORT = 5000;

// Built-in & third-party middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Custom middlewares (global)
app.use(logger);
app.use(ipLogger);
app.use(requestTimer);
app.use(rateLimiter);
app.use(maintenanceMode);

// Test routes
app.get("/", (req, res) => {
  res.send("🧩 Middleware project is live!");
});

app.get("/error", (req, res, next) => {
  const err = new Error("Manual test error");
  err.statusCode = 400;
  next(err);
});

// Error handler (always last)
app.use(errorHandler);

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
