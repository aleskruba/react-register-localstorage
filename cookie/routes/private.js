import express  from "express";
import { checkAuth } from "../middlewares/checkAuth.js";

const router = express.Router();

router.get('/',checkAuth,(req,res)=>{
    res.json("you got the private route")
})

export default router;