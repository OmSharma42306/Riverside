import express, { Request, Response } from "express";


const router = express.Router();

router.post('/upload-to-s3',async(req:Request,res:Response)=>{

    // get video 
    const formData = req.body.formData;
    console.log("Video Data",formData);

    // upload to s3

    
    // return the url;
    try{
        res.status(200).json({msg:"HIIIIIIII"})
        return;
    }catch(error){
        res.status(400).json({error});
        return;
    }
    
})




export default router;