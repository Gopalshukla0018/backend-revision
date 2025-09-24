import {
  getUserData,
  createUserData,
  deleteUserData,
} from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.get("/data", getUserData);
router.post("/data", createUserData);
router.delete("/data", deleteUserData);

export default router;
