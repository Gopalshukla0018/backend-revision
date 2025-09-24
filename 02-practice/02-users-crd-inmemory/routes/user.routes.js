import express from "express";
import {
  getUser,
  createUser,
  removeUser,
  updateUser,
} from "../controllers/user.controllers.js";
const route = express.Router();

route.get("/", getUser);

route.post("/", createUser);

route.delete("/:id", removeUser);
route.patch("/:id",updateUser)

export default route;
