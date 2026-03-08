import express from "express";
import cors from "cors";
import { upload } from "./upload.js";

import fs from "fs";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is running on port :", PORT);
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/api/upload", upload.single("myfile"), (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    message: "done ",
  });
});

app.use("/uploads", express.static("upload/Form_Data"));

app.get("/api/images", (req, res) => {
  fs.readdir("upload/Form_Data", (err, files) => {
    if (err) {
      return res.status(500).json({ message: "Error reading folder" });
    }

    res.json(files); // sirf file names bhej rahe hain
  });
});
