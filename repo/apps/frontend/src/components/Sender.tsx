import { useEffect, useState } from "react"

export default function Sender(){
    const [socket,setSocket] = useState<WebSocket>();
    const pc = new RTCPeerConnection();
    
    async function handleRtc(){
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        socket?.send(JSON.stringify({type:"create-offer",sdp:offer}));
    }
    


    useEffect(()=>{
        const socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () =>{
            setSocket(socket);
        }

        socket.onmessage = (data:any) =>{
            const msg = JSON.parse(data);
            if(msg.type === "create-answer"){
                pc.setRemoteDescription(msg.sdp);
            }
        }
    },[])
    
    useEffect(()=>{
        handleRtc()
    socket?.send(JSON.stringify({msg:""}))
    },[socket])
    
    
    return <div>
        <h1>Hi from Sender.</h1>

    </div>
}