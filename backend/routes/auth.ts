import express, { Request, Response } from 'express';
const {Login,Register,Product} =require("../controller/auth.ts")
const router=express.Router()

router.post("/login",Login)
router.post("/register",Register)
router.post("/pro",Product)

module.exports=router