import { Request,Response,NextFunction } from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;


interface authRequest extends Request{
    userId?:string;
}



async function authMiddleware(req:authRequest,res:Response,next:NextFunction){
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
            // const decoded= jwt.verify(token,JWT_SECRET) as JwtPayload ;
        }
        
    }catch(error){
        res.status(400).json({msg:"JWT ERROR:",error});
    }
    
    req.userId = token;

}