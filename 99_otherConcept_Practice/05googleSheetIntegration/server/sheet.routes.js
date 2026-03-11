import express from "express"
import { sheetExtraction } from "./leadsExtraction.controller.js"

const router = express.Router()


router.post("/sheetExtraction", sheetExtraction)

export default router;

