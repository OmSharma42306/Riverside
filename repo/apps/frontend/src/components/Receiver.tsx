import { useEffect, useState } from "react"


export default function Receiver(){
    const [socket,setSocket] = useState<WebSocket>();
    const [roomId,setRoomId] = useState<string>("");
    const [pc,setPc] = useState<RTCPeerConnection | null>();

    async function init(){
    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = () =>{
        console.log("Socket Connected!");
        socket.send(JSON.stringify({type:"receiver",roomId:roomId}))
        setSocket(socket);
        }
        const pc = new RTCPeerConnection();
        setPc(pc);
    }
    if(socket){
        
        socket.onmessage = async (event:any) =>{
            const msg = JSON.parse(event.data);
            if(msg.type === "sender-remote-description"){
                pc?.setRemoteDescription(msg.sdp);
                console.log(msg.sdp);
                console.log("remote description set")
                const answer = await pc?.createAnswer();
                console.log("Created answer",answer)
                await pc?.setLocalDescription(answer);
                console.log("Answer set local description")
            socket?.send(JSON.stringify({type:'create-answer',sdp:answer}));
            }else if(msg.type === "sender-iceCandidate"){
                pc?.addIceCandidate(msg.candidate);
                console.log("candidate added to receiver");
            }
        }

    
    }
    
    if(pc){
    pc.ontrack = (event) =>{
        const video = document.createElement('video');
        document.body.appendChild(video);

        video.srcObject = new MediaStream([event.track]);
        video.play();
    }

    pc.onicecandidate = (event) =>{
        socket?.send(JSON.stringify({type:'receiver-iceCandidate',candidate:event.candidate}))
    }
    }
    
    
    

    return <div>
        <h1>Hi from Receiver</h1>
        
        <input type="text" placeholder="Enter RoomId" onChange={(e)=>{
            setRoomId(e.target.value);
        }} />

        <button onClick={init}>Go</button>
    </div>
}