import {getUserData} from "../controllers/user.controller.js"
import  express from "express"

const router = express.Router();

router.get("/data",getUserData)


export default router;