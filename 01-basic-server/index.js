console.log("Hello Gopal")
import express from 'express';
import 'dotenv/config'
const app=express();


const port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("Hello home page")
});

app.get("/about",(req,res)=>{
    res.send("Hello about page")
});

app.listen(port,()=>{
    console.log(`server is running on port ${port} `);
});

