import { getUserData, createUserData } from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.get("/data", getUserData);
router.post("/data", createUserData);

export default router;
