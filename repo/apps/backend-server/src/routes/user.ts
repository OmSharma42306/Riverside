import express from "express";
import { Request,Response } from "express";
// import jwt from "jsonwebtoken"
import {SignInSchema,SignUpSchema} from "@repo/common/validation"
import {prismaClient} from  "@repo/db/prisma"
const router = express.Router();


// signup route
router.post('/signup',async(req:Request,res:Response)=>{
const name = req.body.name;
const email = req.body.email;
const password = req.body.password;
console.log("i am here")

const {success} = SignUpSchema.safeParse({name,email,password});
console.log(success)
if(!success){
    res.status(400).json({error:"Invalid Format!"});

}
try{
    const user = await prismaClient.user.create({
        data:{
            name: name,
      email:email,
      password:password
        }
    });
    console.log(user);

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
        res.json({error:"Invalid Input Format!"})
        return;
    }
    
    try{

    }catch(error){
        res.status(400).json({msg:"SignIn Failed!",error});
    }
})

// create room
router.post('/create-room',async(req:Request,res:Response)=>{
    const roomId = req.body.roomId;
    try{

    }catch(error){
        res.status(400).json({msg:"Error Creating Room",error});
    }
})


export default router;