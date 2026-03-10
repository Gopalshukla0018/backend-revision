import express from "express";
import { upload } from "./upload.js";
import cors from "cors";
import cloudinary from "./cloudinary.js";
import fs from "fs";
const app = express();

app.use(cors());

const PORT = 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port:- ${PORT}`);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "health is ok so u can say heallth ok",
  });
});

app.post("/upload", upload.single("myfile"), async (req, res) => {
  try {
    console.log(req.body, req.file);
    const result = await cloudinary.uploader.upload(req.file.path);
    fs.unlinkSync(req.file.path);
    res.status(200).json({
      message: "success",
      url: result.secure_url,
    });
  } catch (error) {
    console.log(error);
  }
});
