import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
const PORT = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());




app.listen(PORT,()=>{
    console.log(`Backend Server Started! at PORT : ${PORT} `)
})