import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import rootRouter from "./api/api"
const PORT = 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use("/api/v1",rootRouter)



app.listen(PORT,()=>{
    console.log(`Backend Server Started! at PORT : ${PORT} `)
})