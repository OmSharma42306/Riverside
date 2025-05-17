import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function JoinRoom(){
    const [roomName,setRoomName] = useState<string|null>(null);
    const navigate = useNavigate();

    async function handleJoinRoom(roomName:string|null){
        navigate("/receiver",{state:{roomId:roomName}})
    }

    return <div>
        <h1>Enter RoomID given By Sender.</h1>
        <br />
        <input type="text" placeholder="Enter RoomID"  onChange={(e)=>setRoomName(e.target.value)}/>
        <br />
        <button onClick={()=>{
            handleJoinRoom(roomName)
        }}>Join Room</button>
        
    </div>
}