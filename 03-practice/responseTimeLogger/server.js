import express from "express";
import { responseTimeLogger } from "./responseTimeLogger.js";

const app = express();
const PORT = 5000;

// Use the middleware
app.use(responseTimeLogger);


app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/slow", (req, res) => {
  setTimeout(() => {
    res.send("This route is intentionally slow");
  }, 2000);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
