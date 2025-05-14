import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;


interface authRequest extends Request{
    userId?:string;
}



export async function authMiddleware(req:authRequest,res:Response,next:NextFunction){
    const authHeaders = req.headers["authorization"];
    console.log(authHeaders);

    if(!authHeaders || !authHeaders.startsWith('Bearer ') ){
        res.json({msg:"Invalid AuthHeaders"});
        return;
    }

    const token = authHeaders?.split(' ')[1];
    console.log(token);
    try{
        
        // decode token
        if(token && JWT_SECRET){
            const decoded= jwt.verify(token,JWT_SECRET) as JwtPayload ;
            req.userId = decoded.userId;            
            next();
        }
        
    }catch(error){
        res.status(400).json({msg:"JWT ERROR:",error});
    }
    
    

}