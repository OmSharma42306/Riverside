import { useEffect, useState } from "react"

export default function Sender(){
    const [socket,setSocket] = useState<WebSocket>();
    const [roomId,setRoomId] = useState<string>("");

    const pc = new RTCPeerConnection();
    
    async function handleRtc(){
        console.log("Called function for rtc");
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        socket?.send(JSON.stringify({type:"create-offer",sdp:offer}));
    }
    
    async function init(){
    console.log("i am triggered!");
        const socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () =>{
            console.log("sockets connected!")
            socket?.send(JSON.stringify({type:"sender",roomId:roomId}));
            setSocket(socket);
        }

       
        
        
        socket.onmessage = (event:any) =>{
            console.log(event);
            
            const msg = JSON.parse(event.data);
            console.log(msg)
            if(msg.type === "receiver-remote-description"){
                pc.setRemoteDescription(msg.sdp);
            }
        }

    }

    if(socket){
        handleRtc();
    }
    
    return <div>
        <h1>Hi from Sender.</h1>
        <input type="text" placeholder="Enter RoomId" onChange={(e)=>{
            setRoomId(e.target.value);
        }} />
        <button onClick={init}>Go</button>

    </div>
}