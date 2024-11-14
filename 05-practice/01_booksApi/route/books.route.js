import express from "express";
import {
  createbook,
  getAllBooks,
  editbooks,
} from "../controller/books.controller.";

const router = express.Router();

// @route   POST /api/books
// @desc    Create a new book
router.post("/", createbook);

// @route   GET /api/books
// @desc    Get all books
router.get("/", getAllBooks);
router.post("/edit/:id", editbooks);

export default router;
