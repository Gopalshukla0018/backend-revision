import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
dotenv.config();

const  Port = process.env.PORT || 3000;

const app = express();


app.get("/", (req, res) => {
  res.send("Hello from backend");

});

let dbClient;
app.get("/data", async (req, res) => {
    try {
      const db = dbClient.db("sample_mflix");
      const data= await db.collection("comments").find().limit(10).toArray();
      res.json(data);
        
    } catch (error) {
        console.log("Error fetching data:", error);
        res.status(500).send("Internal Server Error");        
    }
})


app.listen(Port, async () => {
      dbClient = await connectDB();
  console.log("Server is running on port ", Port);
});