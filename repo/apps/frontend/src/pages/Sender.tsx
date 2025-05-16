import { useEffect, useRef, useState } from "react"

export default function Sender(){
    const [socket,setSocket] = useState<WebSocket>();
    const [roomId,setRoomId] = useState<string>("");
    const [stream,setStream] = useState<MediaStream|any>();
    const [recorder,setRecorder] = useState<MediaRecorder | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () =>{
            console.log("sockets connected!")
            socket?.send(JSON.stringify({type:"sender",roomId:"121"}));
            setSocket(socket);
        }

    },[])

    
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

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'recorded-video-webm';
            a.click();
            URL.revokeObjectURL(url);
        }
    }
    
return <div>

    <h1>Hi from Sender.</h1>
        
        <input type="text" placeholder="Enter RoomId" onChange={(e)=>{
            setRoomId(e.target.value);
        }} />
        <br />
        <button onClick={()=>{
            {recorder?.start()}
        }}>Start Recording</button>
        
        <br/>
        
        <button onClick={()=>{
            recorder?.stop();
        }}>Stop Recording</button>
        
        <video ref={videoRef} muted autoPlay playsInline></video>

        {socket?<button onClick={handleRtc}>Handle RTC</button> :""}
    
    </div>
}