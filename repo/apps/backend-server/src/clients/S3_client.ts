import { S3Client } from "@aws-sdk/client-s3"
import dotenv from "dotenv";

dotenv.config();

// Setting up AWS CLIENT FOR S3
export const s3 = new S3Client({
    region: process.env.AWS_REGION || "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "dummy",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "dummy"
    }
})