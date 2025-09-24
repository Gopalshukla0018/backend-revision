import express from "express";
import { getAllProducts, getBestSellerProducts, getNewProductsForm } from "../controllers/products.Controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/new", getNewProductsForm);
router.get("/bestseller",getBestSellerProducts)

export default router;
