import express from "express";
import { createBook, getAllBooks } from "../controllers/books.controller.js";

const router = express.Router();

// @route   POST /api/books
// @desc    Create a new book
router.post("/", createBook);

// @route   GET /api/books
// @desc    Get all books
router.get("/", getAllBooks);

export default router;
