import express, { Request, Response } from "express";
import multer from "multer";
import {S3Client,PutObjectCommand} from "@aws-sdk/client-s3"
import { authMiddleware } from "../middlewares";
import { prismaClient } from "@repo/db/prisma";
import fs from "fs"
import path from "path";

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
    fieldname?: string;
    originalname: string;
    encoding?: string;
    mimetype?: string;
    buffer: Buffer;
    size?: number;
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

// uploads a Complete Video File to S3.
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

// create the chunks and stores for temp storage in uploads folder by SessionId.
router.post('/chunks',upload.single('chunk'),authMiddleware,async(req:authRequest,res:Response)=>{
    const file = req.file;
    const {chunkIndex,sessionName,sessionCode} = req.body;
    
    try{
        if(!file){
            res.status(400).json({msg:"File empty"})
            return;
        }
        if(!chunkIndex || !sessionCode || !sessionName){
            res.status(400).json({msg:"Missing Data!"});
        }

        
        // all chunks stuff
        console.log("ChunkIndex: ",chunkIndex);
        console.log("SessionName",sessionName);
        console.log("SessionCode",sessionCode);
        // store on local. after getting end chunk merge and upload to s3.
        // Save each chunk to a temp directory

        const dir = path.join(__dirname,'..','uploads','chunks',sessionName);
        fs.mkdirSync(dir,{recursive:true})
        
        const chunkPath = path.join(dir,`${chunkIndex}.webm`);
        fs.writeFileSync(chunkPath,file.buffer);
        
        res.status(200).json({msg:"Success!",data:{chunkIndex,sessionCode,sessionName}});
        return;
    }catch(error){
        res.status(400).json({msg:error});
        return;
    }
})

// merge the existing chunks and uploads to s3.
router.post('/merge-upload-s3',authMiddleware,async (req:authRequest,res:Response)=>{
    const sessionName = req.body.sessionId;
    const dir = path.join(__dirname,'..','uploads','chunks',sessionName);

    try{
        if(!sessionName){
            res.json(400).json({msg:"Empty Data! SessionId not Found!"});
            return;
        }
        if(!dir){
            res.status(400).json({msg:"Chunks Not Found!"});
            return;
        }

        // sort the files of the existing chunks directory.ensures chunks are in correct numerical order.
        const files = fs.readdirSync(dir).sort((a,b)=>
            parseInt(a) - parseInt(b)
        )

        // the path where final merged video will be
        const mergedPath = path.join(__dirname,'..','uploads',`${sessionName}.webm`);
        // created a writeStream to write all chunks into single file to above mergedPath.
        const writeStream = fs.createWriteStream(mergedPath);

        // reading chunks 
        for (const file of files){
            const chunk = fs.readFileSync(path.join(dir,file));
            writeStream.write(chunk);
        }

        writeStream.end();

        // after writeStream end , the finish event will be called.
        writeStream.on('finish',async()=>{
            // so finalBuffer will be stored at mergedPath.Reading finalBuffer
            const finalBuffer = fs.readFileSync(mergedPath);
            // uploading that finalBuffer to S3 that is Final Merged Video.
            const s3Url = await uploadToS3({buffer:finalBuffer,originalname:`${sessionName}.webm`});
            // store metadata about this stuff to db.

            // Removed Existing Unusable Chunks.
            fs.rmSync(dir,{recursive:true,force:true});
            fs.unlinkSync(mergedPath);
            
            // Sending an Downloadable url for user to Download Final Video.
            res.status(200).json({msg:"Uploaded Successfully!",url:s3Url});
        })

        
    }catch(error){
        res.status(400).json({msg:error});
        return;
    }
})


export default router;