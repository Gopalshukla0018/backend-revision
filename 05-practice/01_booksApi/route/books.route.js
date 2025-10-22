import express from "express"
import { createbook, getAllBooks } from "../controller/books.controller.js";

const router = express.Router();

router.route("/").post(createbook)
router.route("/").get(getAllBooks)

export default router;