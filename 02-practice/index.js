import express from "express"
import "dotenv/config"
import productsRoute from "./routes/products.routes.js"
const app= express();
const port = process.env.PORT || 3000


app.use("/api/v1",productsRoute)


app.get('/',(_,res)=>{
    return res.send("<h1>every thing is okay </h1>")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})