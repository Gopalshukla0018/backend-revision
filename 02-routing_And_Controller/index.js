import express from "express";
import userRoutes from "./routes/user.Routes.js";
const app = express();

app.use(express.json());
const port = 8000;

app.get("/", (req, res) => {
  res.send({
    message: "server is running",
  });
});

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`server in running on port ${port}`);
});
