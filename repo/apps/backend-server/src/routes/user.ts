import express from "express";
import { Request,Response } from "express";
import jwt from "jsonwebtoken"
const router = express.Router();


// signup route
router.post('/signup',async(req:Request,res:Response)=>{
const name = req.body.name;
const email = req.body.email;
const password = req.body.password;

try{
    

}catch(error){
    res.status(400).json({msg:"Signup Failed!",error});
}



})


// signin route
router.post('/signin',async(req:Request,res:Response)=>{
    const email = req.body.email;
    const password = req.body.password;
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