import {MongoClient} from "mongodb";
import dotenv from "dotenv";
import { mongoose } from "mongoose";

dotenv.config();


const client =new MongoClient(process.env.MONGO_URL);


export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");
        return client;
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        
    }
}