import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom";

const token = localStorage.getItem("JWT");

export default function Receiver(){
    const videoRef = useRef<HTMLVideoElement>(null);
    const [socket,setSocket] = useState<WebSocket>();
    const [roomId,setRoomId] = useState<string>("");
    const [stream,setStream] = useState<MediaStream | null>(null);
    const [recorder,setRecorder] = useState<MediaRecorder | null>(null);
    const [startRecordings,setStartRecordings] = useState<Boolean>(false);
    const [videoUrl,setVideoUrl] = useState<string | null>(null);
    const [loaderStopRecording,setLoaderStopRecording] = useState<Boolean>(false);
    const location = useLocation();
    const roomName = location?.state?.sessionCode;
    const sessionId = location?.state?.sessionId
    useEffect(()=>{
        setRoomId(roomName)
        const socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () =>{
            if(roomId){ 
                console.log("ROomua",roomId)
            
            socket?.send(JSON.stringify({type:"receiver",roomId:roomId}));
            setSocket(socket);
            console.log("sockets connected!")
            }
            
        }

        const pc = new RTCPeerConnection();
        socket.onmessage = async (event:any) =>{
            const msg = JSON.parse(event.data);
            console.log(msg)
            
            if(msg.type === "sender-remote-description"){
                
                await pc.setRemoteDescription(msg.sdp);
                
                console.log(msg.sdp);
                console.log("remote description set")
                
                const answer = await pc?.createAnswer();
                
                console.log("Created answer",answer)
                
                await pc.setLocalDescription(answer);
                
                console.log("Answer set local description")
                
                socket?.send(JSON.stringify({type:'create-answer',sdp:answer}));

                    
                
            }
            
            
            else if(msg.type === "sender-iceCandidate"){
                pc.addIceCandidate(msg.candidate);
                console.log("candidate added to receiver");
            }
        }
        pc.ontrack = (event) =>{
             console.log("Track received:", event.track);
             console.log("Stream received:", event.streams[0]);
             setStream(event.streams[0])
        }

        pc.onicecandidate = (event) =>{
            socket?.send(JSON.stringify({type:'receiver-iceCandidate',candidate:event.candidate}))
                    
        }
        
      
       
    },[roomId])

       if(videoRef.current){
                console.log("streamya",stream);
                videoRef.current.srcObject = stream;
                videoRef.current.play();
        }
    
        
            
        let chunks : any = [];

        function startRecording(){
            setStartRecordings(true)
            if(stream){
            console.log("I AM HERE !")
            const mediaRecorder = new MediaRecorder(stream,{mimeType:"video/webm"});
            setRecorder(mediaRecorder);
            
            console.log(" I am under the REcorder");
            mediaRecorder.ondataavailable = (e:any) =>{
                if(e.data.size > 0){
                    chunks.push(e.data);
                }
            }

            mediaRecorder.onstop = () =>{
                const blob = new Blob(chunks,{type: "video/webm"});
                
                sendBlobToS3(blob)
            }

            async function sendBlobToS3(blob:Blob){
                const formData = new FormData()
                formData.append('file',blob,'recording-receiver-side.webm');
                formData.append('sessionId',sessionId)
                const response = await axios.post('http://localhost:3001/api/v1/recordings/upload-to-s3',formData,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });
                const data = response.data;        
                setVideoUrl(data.url)
                setLoaderStopRecording(false);
            }
        }
}


        
        

    return <div>
        <h1>Hi from Receiver</h1>
        
        
        <br />
        <button onClick={startRecording}>SetUp Recording</button>
        <br />
        {
            startRecordings ?<><button onClick={()=>{
           { recorder?.start()}
        }}>Start Recording</button>
         <button onClick={()=>{
            {recorder?.stop()}
            setLoaderStopRecording(true)
        }}>Stop Recording</button> 
        </>: ""
        }

        {loaderStopRecording ? <h1>Wait For Url...</h1> :""}
        {videoUrl ? <>
        <h1>The Recorded Video of Yours</h1>
        <br />
        <video src={videoUrl} autoPlay playsInline></video>
        </> : ""}

        
        
           
        
        
        <video ref={videoRef} autoPlay muted playsInline ></video>

    </div>
}