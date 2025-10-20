import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

export const connectDB = async () => {
  try {
    await client.connect();
    console.log(" MongoDB Connected");
    return client.db("sample_mflix"); // DB name
  } catch (error) {
    console.log(" MongoDB Connection Failed", error);
  }
};
