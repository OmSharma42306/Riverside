import { useEffect, useState } from "react"


export default function Receiver(){
    const [socket,setSocket] = useState<WebSocket>();
    const [roomId,setRoomId] = useState<string>("");
    
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
                  
            const video = document.createElement("video");
            video.autoplay = true;
            video.playsInline = true;
            video.style.width = "640px";
            video.style.height = "480px";
            video.srcObject = event.streams[0];
            document.body.appendChild(video);

        }

        pc.onicecandidate = (event) =>{
            socket?.send(JSON.stringify({type:'receiver-iceCandidate',candidate:event.candidate}))
                    
        }

       
    },[])

    return <div>
        <h1>Hi from Receiver</h1>
        
        <input type="text" placeholder="Enter RoomId" onChange={(e)=>{
            setRoomId(e.target.value);
        }} />

        {/* <button onClick={init}>Go</button> */}
    </div>
}