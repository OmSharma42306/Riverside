import dotenv from "dotenv";
import path from "path";
import fs from "fs";
dotenv.config({path:path.resolve(__dirname,'../../.env')});
import { Worker } from "bullmq";
import { connection } from "../lib/redis_connection";
import { uploadToS3 } from "../lib/upload_to_s3";
import { prismaClient } from "@repo/db/prisma"

const mergeWorker = new Worker('merge-queue', async job=>{  
    const {sessionName ,userType,sessionId,userId } = job.data;
    console.log("i am worker",sessionName,userType,sessionId);
    const dir = userType === 'sender'
     ? path.join(__dirname,'..','uploads','chunks',sessionName)
     : path.join(__dirname,'..','uploads2','chunks',sessionName);

    const mergedPath = path.join(dir,'..',`${sessionName}-${userType}.webm`);

     // sort the files of the existing chunks directory.ensures chunks are in correct numerical order.
    const files = fs.readdirSync(dir).sort((a,b)=>
        parseInt(a) - parseInt(b)
    )

    const writeStream = fs.createWriteStream(mergedPath);
    
    for (const file of files) {
    const chunk = fs.readFileSync(path.join(dir, file));
    writeStream.write(chunk);
  }

   return new Promise((resolve, reject) => {
    writeStream.end();
    writeStream.on('finish', async () => {
      const buffer = fs.readFileSync(mergedPath);
      const s3Url = await uploadToS3({
        buffer,
        originalname: `${sessionName}-${userType}.webm`,
        mimetype: 'video/webm',
      });

      fs.rmSync(dir, { recursive: true, force: true });
      fs.unlinkSync(mergedPath);

      console.log("Final S3",s3Url);

      // db stuff: Save s3Url to DB here
          const tracks = await prismaClient.tracks.create({data:{
                userId:userId,
                trackName:`${sessionName}-${userType}`,
                s3Url:s3Url,
                sessionId:sessionId
            }})
            console.log("Tracks : ",tracks);

          resolve({ s3Url });
    });

    writeStream.on('error', reject);
  });

},{connection});

mergeWorker.on('completed',job=>{
    console.log("JobID : ",job.id)
})