import { useEffect, useState } from "react"

export default function Sender(){
    const [socket,setSocket] = useState<WebSocket>();
    const [roomId,setRoomId] = useState<string>("");
    
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
        stream.getTracks().forEach(track => pc.addTrack(track, stream))
        
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


    // sending video

    
        const video = document.createElement('video');
        video.srcObject = stream;
        video.autoplay = true;
        video.muted = true;
        document.body.appendChild(video);
    }
    

    return <div>
        <h1>Hi from Sender.</h1>
        <input type="text" placeholder="Enter RoomId" onChange={(e)=>{
            setRoomId(e.target.value);
        }} />
        <button>Go</button>

        {socket?<button onClick={handleRtc}>Handle RTC</button> :""}
    
    </div>
}