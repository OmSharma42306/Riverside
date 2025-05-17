import express from "express";
import { Request,Response } from "express";
import jwt from "jsonwebtoken"
import {SignInSchema,SignUpSchema} from "@repo/common/validation"
import {prismaClient} from  "@repo/db/prisma"
import dotenv from "dotenv"
import { authMiddleware } from "../middlewares";
const router = express.Router();
dotenv.config();


const JWT_SECRET = process.env.JWT_SECRET || "";

interface authRequest extends Request{
    userId? : string;
}

// signup route
router.post('/signup',async(req:Request,res:Response)=>{
const name = req.body.name;
const email = req.body.email;
const password = req.body.password;
console.log("i am here")

const {success} = SignUpSchema.safeParse({name,email,password});
console.log(success)
if(!success){
    res.status(400).json({msg:"Invalid Format!"});

}
try{

    const checkExistingUser = await prismaClient.user.findFirst({
        where:{
            email:email
        }
    });

    if(checkExistingUser){
        res.status(409).json({msg:"User Already Exists!"});
        return;
    }
    const user = await prismaClient.user.create({
        data:{
        name: name,
        email:email,
        password:password
        }
    });

    res.status(200).json({msg:"User SignUp Successfully!"});
    return;

}catch(error){
    res.status(400).json({msg:"Signup Failed!",error});
}

})


// signin route
router.post('/signin',async(req:Request,res:Response)=>{
    const email = req.body.email;
    const password = req.body.password;
    const {success} = SignInSchema.safeParse({email,password});

    if(!success){
        res.status(400).json({msg:"Invalid Input Format!"})
        return;
    }
    
    try{
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        });

        if(!user){
            res.status(400).json({msg:"User Not Exists!"});
            return;
        }

        const userId = user.id;
        const token = await jwt.sign({userId},JWT_SECRET);
        res.status(200).json({msg:"Successful SignIn!",token:token});
        return;

    }catch(error){
        res.status(400).json({msg:"SignIn Failed!",error});
    }
})

// create room
router.post('/create-room',authMiddleware,async(req:authRequest,res:Response)=>{
    const roomId = req.body.roomId;
    let id  = req.userId;
    const userId = Number(id);
    console.log("Hi! omya",id)
    
    try{
        const user = await prismaClient.user.findFirst({
            where:{
                id:userId
            }
        })
        console.log("HELLO",user)
    }catch(error){
        res.status(400).json({msg:"Error Creating Room",error});
    }
})


export default router;