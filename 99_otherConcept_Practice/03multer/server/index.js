import express from "express";
import cors from "cors";
import { upload } from "./upload.js";
const app = express();

app.use(cors());
const port = 3000;

app.post("/upload", upload.single("myfile"), (req, res) => {
  try {
    console.log(req.body);
    return res.status(200).json({
      message: "upload successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("running on port", port);
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success run",
  });
});
