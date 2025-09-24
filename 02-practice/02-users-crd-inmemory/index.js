import express from "express";
import userRoute from "./routes/user.routes.js";
const app = express();

const port = process.env.PORT || 4000;
app.use(express.json());
app.use("/api/v1", userRoute);

app.use("/",(req,res)=>{
     res.send("<h1> every thing is okay</h1>")
})

app.listen(port, (req, res) => {
  console.log(`server is running on port : ${port}`);
});
