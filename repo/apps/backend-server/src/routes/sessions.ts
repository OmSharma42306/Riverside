import express, { Request, Response } from "express";
import { authMiddleware } from "../middlewares";
import { prismaClient } from "@repo/db/prisma";
import { v4 as uuidv4 } from "uuid"
const router = express.Router();

interface authRequest extends Request{
    userId?:number;
}

router.post('/create-session',authMiddleware,async(req:authRequest,res:Response)=>{
    const sessionName = req.body.sessionName;
    const userId = Number(req.userId);
    
    try{
        const sessionCode = uuidv4();
        console.log(sessionCode)
        const session = await prismaClient.sessions.create({
            data:{ sessionName:sessionName,userId:userId,sessionCode:sessionCode}
        });
                    
    res.status(200).json({"sessionid":session.id,"sessionCode":sessionCode});
    return;
}catch(error){
    res.status(400).json({msg:error});
    return;
}
});

router.post('/joinSession',authMiddleware,async(req:authRequest,res:Response)=>{
    const sessionCode = req.body.sessionCode;
    const userId = Number(req.userId);

    try{
        const session = await prismaClient.sessions.findUnique({
            where:{
                sessionCode:sessionCode
            }
        });
        if(!session){
            res.status(400).json({msg:"Session Not Exists!"});
            return;
        }
        const joinSession = await prismaClient.joinSession.create({
            data:{
                userId:userId,sessionId:session.id
            }
        });
        res.status(200).json({msg:"Join Session Success!"});
        return;
    }catch(error){
        res.status(400).json({msg:error});
        return;
    }
})


export default router;