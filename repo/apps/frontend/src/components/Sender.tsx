import { useEffect, useState } from "react"

export default function Sender(){
    const [socket,setSocket] = useState<WebSocket>();
    const [roomId,setRoomId] = useState<string>("");
    const [pc,setPc] = useState<RTCPeerConnection | null>();
    
    
    async function handleRtc(){
        const pc = new RTCPeerConnection();
        setPc(pc)

        console.log("Called function for rtc");
        const offer = await pc.createOffer();
        console.log("OFFER",offer);
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

                pc?.setRemoteDescription(msg.sdp);
                console.log("Receiver remote description set!")
                socket.send(JSON.stringify({hi:"hh"}))
            }else if(msg.type === "receiver-iceCandidate"){
                pc?.addIceCandidate(msg.candidate);
                console.log("added candidate");
            }
        }

    }
    
    if(pc){

    
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
}


    
    return <div>
        <h1>Hi from Sender.</h1>
        <input type="text" placeholder="Enter RoomId" onChange={(e)=>{
            setRoomId(e.target.value);
        }} />
        <button onClick={init}>Go</button>

        {socket?<button onClick={handleRtc}>Handle RTC</button> :""}
        

    </div>
}