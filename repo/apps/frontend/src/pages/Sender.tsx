import { useEffect, useRef, useState } from "react"
import axios from "axios";
import { useLocation } from "react-router-dom";


export default function Sender(){
    const [socket,setSocket] = useState<WebSocket>();
    const [roomId,setRoomId] = useState<string | null>(null);
    const [stream,setStream] = useState<MediaStream|any>();
    const [recorder,setRecorder] = useState<MediaRecorder | null>(null);
    const [videoUrl,setVideoUrl] = useState<string | null>("");
    const [loaderStopRecording,setLoaderStopRecording] = useState<Boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null)
    const location = useLocation();
    const roomName = location?.state?.roomId;
    
    
        
    
    useEffect(()=>{
        setRoomId(roomName)
    const socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () =>{
            
            if(roomId){
                console.log("Final ROom",roomId);
                socket?.send(JSON.stringify({type:"sender",roomId:roomId}));
                setSocket(socket);
                console.log("sockets connected!")
            }
            
            
        }

    },[roomId])

    
    async function handleRtc(){
        if(!socket) return;

        socket.onmessage = async (event:any) =>{
            console.log(event);
            
            const msg = JSON.parse(event.data);
            console.log(msg)
            if(msg.type === "receiver-remote-description"){

                pc?.setRemoteDescription(msg.sdp);
                
                socket.send(JSON.stringify({hi:"hh"}))
            }else if(msg.type === "receiver-iceCandidate"){
                pc?.addIceCandidate(msg.candidate);
                console.log("added candidate");
            }
        }



        const pc = new RTCPeerConnection();
        
        const stream = await navigator.mediaDevices.getUserMedia({video:true,audio:false});
        //  setStream(stream)  
        // stream.getTracks().forEach(track =>{
        //     pc.addTrack(track, stream)
        // })
        setStream(stream);

        if(videoRef.current){
            videoRef.current.srcObject = stream;
            
            stream.getTracks().forEach(track =>{
                pc.addTrack(track,stream);
                console.log("TRACK",track);
                console.log("STREAM",stream)
            })
            videoRef.current.play();
        }
        
        pc.onnegotiationneeded = async () =>{
        console.log("onnegotiated")
        const offer = await pc.createOffer();
        console.log("ONNEGO",offer);
        await pc.setLocalDescription(offer);
        socket?.send(JSON.stringify({type:"create-offer",sdp:offer}))
    }
        
        pc.onicecandidate = async(event) =>{
        console.log("Ice candidate function!");
        if(event.candidate){
            socket?.send(JSON.stringify({type:"sender-iceCandidate",candidate:event.candidate}));
        }
    }

        // Media Recoreder Stuff.
        const mediaRecorder = new MediaRecorder(stream,{mimeType:'video/webm'});
        setRecorder(mediaRecorder); 
        let chunks : any = [];

        // Media Recorder Data Getting.
        mediaRecorder.ondataavailable = (e:any) =>{
        
            if(e.data.size > 0){
                // setChunks(prev => [...prev,e.data]);
                chunks.push(e.data);
                    console.log("Data Avilable",e.data);
            }            
        }

        // Download the Recorded Video after Stoping the Recording.
        mediaRecorder.onstop = () =>{
            const blob = new Blob(chunks,{type:'video/webm'});
            
        // DEBUG
        console.log("Final Blob", blob);
        console.log("Blob size", blob.size);
        console.log("Blob type", blob.type);
        
        sendBlobToS3(blob)
        

            // const url = URL.createObjectURL(blob);
            // const a = document.createElement('a');
            // a.href = url;
            // a.download = 'recorded-video-webm';
            // a.click();
            // URL.revokeObjectURL(url);

        }

        async function sendBlobToS3(blob:Blob){            
            const formData = new FormData();
            formData.append('file',blob,'recording-sender-side.webm');
            const response = await axios.post('http://localhost:3001/api/v1/recordings/upload-to-s3',formData);
            const data = response.data;
            console.log("Data",data);
            setVideoUrl(data.url);
            setLoaderStopRecording(false);
        }
    }
    
return <div>

    <h1>Hi from Sender.</h1>
        
        <br />
        <button onClick={()=>{
            {recorder?.start()}
        }}>Start Recording</button>
        
        <br/>
        
        <button onClick={()=>{
            recorder?.stop();
            setLoaderStopRecording(true);
        }}>Stop Recording</button>
        
        {loaderStopRecording ? <h1>Wait For Url.....</h1>:""}
        
        
        {videoUrl ?<><h1>Your Recorded Video</h1><video src={videoUrl} autoPlay playsInline></video></>  : ""}
        <video ref={videoRef} muted autoPlay playsInline></video>

        {socket?<button onClick={handleRtc}>Handle RTC</button> :""}
    
    </div>
}