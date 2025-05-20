import express, { Request, Response } from "express";
import { authMiddleware } from "../middlewares";
import { prismaClient } from "@repo/db/prisma";
const router = express.Router();


router.post('/create-session',authMiddleware,async(req:Request,res:Response)=>{
    console.log("i am here!");
    const sessionName = req.body.sessionName;
    const userId = req.body.userId;
    
    try{
        const session = await prismaClient.sessions.create({
            data:{ sessionName:sessionName,userId:userId}
        })
    
    
    res.status(200).json({"sessionid":session.id})
    return;
}catch(error){
    res.status(400).json({msg:error});
    return;
}
})




export default router;