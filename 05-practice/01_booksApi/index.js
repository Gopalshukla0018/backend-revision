import express from "express";
import dotenv  from "dotenv";
import booksRoute from "./route/books.route.js"
import connectDB from "./config/db.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000

app.use("/api/books",booksRoute)



app.listen(PORT, () => {
  console.log("server is running on",PORT);
});
