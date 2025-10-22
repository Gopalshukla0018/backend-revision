import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.Mongo_URI);
    console.log("mongo db connected with", conn.connection.host);
  } catch (error) {
    console.log("error in connectDB controller", error);
  }
};
export default connectDB;
