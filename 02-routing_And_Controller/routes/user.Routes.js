import {
  getUserData,
  createUserData,
  deleteUserData,
  updateUserData
} from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.get("/data", getUserData);
router.post("/data", createUserData);
router.delete("/data", deleteUserData);
router.patch("/data", updateUserData);

export default router;
