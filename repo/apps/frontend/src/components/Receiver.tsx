import { useEffect, useState } from "react"

export default function Receiver(){
    const [socket,setSocket] = useState<WebSocket>();
    

    useEffect(()=>{
        const socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () =>{
            console.log("Socket Connected!");
            setSocket(socket);
        }

        let pc : RTCPeerConnection | null = null;
        socket.onmessage = async (event:any) =>{
            const msg = JSON.parse(event.data);
            if(msg.type === "create-offer"){
                pc = new RTCPeerConnection();
                pc.setRemoteDescription(msg.sdp);
                
                
        
                // Create an Answer.
                const answer = await pc.createAnswer();    
                const sdp = await pc.setLocalDescription(answer);

                socket.send(JSON.stringify({type:"create-answer",sdp:sdp}))
        
            }else if(msg.type === ""){

            }
        }
        
        

        return () =>{
            socket.close(); // Cleanup the Connection On Mount.
        }
        
    },[socket])
    
    


    return <div>
        <h1>Hi from Receiver</h1>
    </div>
}