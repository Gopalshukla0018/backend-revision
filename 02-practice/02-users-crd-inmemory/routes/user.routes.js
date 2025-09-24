import express from "express";
import {
  getUser,
  createUser,
  removeUser,
} from "../controllers/user.controllers.js";
const route = express.Router();

route.get("/", getUser);

route.post("/", createUser);

route.delete("/:id", removeUser);

export default route;
