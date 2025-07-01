import { fileType } from "../types/types";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "../clients/S3_client";
import dotenv from "dotenv"
dotenv.config();

// Function to Upload Files to S3
export async function uploadToS3(file:fileType){
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