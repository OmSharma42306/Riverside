import express, { Request, Response } from "express";
import multer from "multer";
import fs from "fs"
import path from "path";
import { authMiddleware } from "../middlewares";
import { prismaClient } from "@repo/db/prisma";
import { uploadToS3 } from "../lib/upload_to_s3"
import { mergeQueue } from "../queues/merge_queue"
import dotenv from "dotenv"
dotenv.config();

interface authRequest extends Request{
    userId?:string;
}

const router = express.Router();


// For File Stuff..
const upload = multer();

// uploads a Complete Video File to S3.
router.post('/upload-to-s3',upload.single('file'),authMiddleware,async(req:authRequest,res:Response)=>{

    const file = req.file;
    const userId = Number(req.userId);
    const sessionId = Number(req.body.sessionId);
   
    try{
        if(!file){
            res.status(400).json({error:"File Not Found!"})
            return;
        }

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
    const {chunkIndex,sessionName,sessionCode,userType} = req.body;

    try{
        if(!file){
            res.status(400).json({msg:"File empty"})
            return;
        }
        if(!chunkIndex || !sessionCode || !sessionName){
            res.status(400).json({msg:"Missing Data!"});
        }
        
        // store on local. after getting end chunk merge and upload to s3.
        // Save each chunk to a temp directory
        if(userType==='sender'){
            const dir = path.join(__dirname,'..','uploads','chunks',sessionName);
            fs.mkdirSync(dir,{recursive:true})
        
            const chunkPath = path.join(dir,`${chunkIndex}.webm`);
            fs.writeFileSync(chunkPath,file.buffer);
        
        res.status(200).json({msg:"Success!",data:{chunkIndex,sessionCode,sessionName}});
        return;
        }
        if(userType === 'receiver'){
            const dir = path.join(__dirname,'..','uploads2','chunks',sessionName);
            fs.mkdirSync(dir,{recursive:true});

            const chunkPath = path.join(dir,`${chunkIndex}.webm`)
            fs.writeFileSync(chunkPath,file.buffer);

            res.status(200).json({msg:"Success!",data:{chunkIndex,sessionCode,sessionName}});
            return;
        }
        return;
    }catch(error){
        res.status(400).json({msg:error});
        return;
    }
})




// merge the existing chunks and uploads to s3.
// add a queue to do this task , cause this is an asynchronus task.

router.post('/merge-upload-s3',authMiddleware,async (req:authRequest,res:Response)=>{
    const userId = Number(req.userId);
    const sessionName = req.body.sessionName;
    const sessionId = Number(req.body.sessionId);
    const userType = req.body.userType;
    console.log("merge session ID",sessionId);
    console.log("session name",sessionName);

    try{
        await mergeQueue.add('merge-video-job',{sessionName,userType,sessionId,userId},{
            jobId : `${sessionName}-${userType}`, // added deduplicatiy.means if a task added once and after many times if you it won'd accept.
            removeOnComplete : true
        });

        res.status(200).json({msg: "Video is Processing!"});
        return;
        
    }catch(error){
        res.status(400).json({msg:error});
        return;
    }
})



router.post('/get-all-tracks',async(req:authRequest,res:Response)=>{
    
    const sessionId = req.body.sessionId;
    // const userId = req.userId;

    // do a db call and fetch session and get both host and joiner's tracks , and return s3url of the tracks.
    const tracks = await prismaClient.tracks.findMany({where:{
        sessionId:sessionId
    }});
    
console.log("Tracks : " ,tracks)
if(!tracks){
    res.status(400).json({msg:"Tracks not Found!"});
}

// res.status(200).json({msg:"TracksFound",senderTrack:tracks?.senderTrack,receiverTrack:tracks?.receiverTrack,tracks:tracks});

});


router.get('/get-session-videos/:sessionId',async(req:Request,res:Response)=>{
    const sessionId = Number(req.params.sessionId);
    // const sessionId = 54;
    // console.log("Session ID 2",sessionId2);

    try{
        const allVideoUrl = await prismaClient.tracks.findMany({
            select:{
                s3Url:true
            },where:{
                sessionId:sessionId
            }
        });
        console.log("all Video Url",allVideoUrl);
        res.status(200).json({recordings:allVideoUrl});
    }catch(error){
        res.status(400).json({error:error});        
    }
    return ; 
})


export default router;


