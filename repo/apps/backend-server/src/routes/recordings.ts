import express, { Request, Response } from "express";
import multer from "multer";
import {S3Client,PutObjectCommand} from "@aws-sdk/client-s3"
import { authMiddleware } from "../middlewares";
import { prismaClient } from "@repo/db/prisma";

const router = express.Router();


// Setting up AWS CLIENT FOR S3
const s3 = new S3Client({
    region:process.env.AWS_REGION!,
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY!
    }
})


interface fileType{
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer;
    size: number;
}

interface authRequest extends Request{
    userId?:string;
}


// Function to Upload Files to S3
async function uploadToS3(file:fileType){
    console.log(file);
    const uploadCommand = new PutObjectCommand({
        Bucket:process.env.S3_BUCKET_NAME!,
        Key:file.originalname,
        Body:file.buffer,
        ContentType:file.mimetype
    });
    await s3.send(uploadCommand)

    const s3Url = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${file.originalname}`
    console.log(s3Url)
    return s3Url;
}


// For File Stuff..
const upload = multer();

router.post('/upload-to-s3',upload.single('file'),authMiddleware,async(req:authRequest,res:Response)=>{
    // get video 
    const file = req.file;
    const userId = Number(req.userId);
    const sessionId = Number(req.body.sessionId);

    // Logs of file
    // {                                                                                 
    //  fieldname: 'file',        
    //  originalname: 'recording.webm',
    //  encoding: '7bit',
    //  mimetype: 'video/webm',
    //  buffer: <Buffer 1a 45 df a3 a3 42 86 81 01 42 f7 81 01 42 f2 81 04 42 f3 81 08 42 82 88 6d 61 74 72 6f 73 6b 61 42 87 81 04 42 85 81 02 18 53 80 67 01 ff ff ff ff ff ... 1172555 more bytes>,
    //  size:1172605
    // }  
    try{

        if(!file){
            res.status(400).json({error:"File Not Found!"})
            return;
        }
        console.log("Received file:", file.originalname, file.mimetype, file.size);

        // upload to s3
        const s3Url = await uploadToS3(file);

        const tracks = await prismaClient.tracks.create({
         
            data:{                
                userId:userId,
                sessionId:sessionId,
                trackName:file.originalname,
                s3Url:s3Url
            }
        });
        if(!tracks){
            res.status(400).json({msg:"Tracks are Inserted to DB."})
            return;
        }
        console.log(tracks);
        // return the url;
        res.status(200).json({msg:"Successfully Uploaded!",url:s3Url});
            
    }catch(error){
        res.status(400).json({error});
        return;
    }
});




export default router;