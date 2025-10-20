import { connectDB } from "../config/db.js";

export const getUsers = async (req, res) => {
  try {
    const db = await connectDB();
    const users = await db.collection("users").find().toArray(); // users collection
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};
