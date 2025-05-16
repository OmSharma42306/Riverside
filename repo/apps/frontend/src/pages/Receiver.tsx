import { useEffect, useRef, useState } from "react"

export default function Receiver(){
    const videoRef = useRef<HTMLVideoElement>(null);
    const [socket,setSocket] = useState<WebSocket>();
    const [roomId,setRoomId] = useState<string>("");
    const [stream,setStream] = useState<MediaStream | null>(null);
    const [recorder,setRecorder] = useState<MediaRecorder | null>(null);
    const [startRecordings,setStartRecordings] = useState<Boolean>(false);
        
    useEffect(()=>{
    
        const socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () =>{
            console.log("sockets connected!")
            socket?.send(JSON.stringify({type:"receiver",roomId:'121'}));
            setSocket(socket);
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
        
      
       
    },[])

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
                // DEBUG
                console.log("Final Blob", blob);
                console.log("Blob size", blob.size);
                console.log("Blob type", blob.type);

                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'receiver-side-recorded-video-webm';
                a.click();
                URL.revokeObjectURL(url);
            }
        }

        }
        
        

    return <div>
        <h1>Hi from Receiver</h1>
        
        <input type="text" placeholder="Enter RoomId" onChange={(e)=>{
            setRoomId(e.target.value);
        }} />
        <br />
        <button onClick={startRecording}>SetUp Recording</button>
        <br />
        {
            startRecordings ?<><button onClick={()=>{
           { recorder?.start()}
        }}>Start Recording</button>
         <button onClick={()=>{
            {recorder?.stop()}
        }}>Stop Recording</button> 
        </>: ""
        }
        
        
           
        
        
        <video ref={videoRef} autoPlay muted playsInline ></video>

    </div>
}