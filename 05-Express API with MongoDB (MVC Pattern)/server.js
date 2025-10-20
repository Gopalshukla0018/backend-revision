import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
// app.use("/",(req,res)=>{
//     res.send("Hello from Express MongoDB MVC Pattern");         
// })
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(` Server running on port ${process.env.PORT}`);
});
