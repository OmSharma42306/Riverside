import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CreateRoom(){
    const [roomName,setRoomName] = useState<string | null>(null);
    const naviagte = useNavigate();

    async function handleCreateRoom(roomId:string | null){
        naviagte("/sender",{state:{roomId:roomId}})
    }
    return <div>

        <h1>Enter Room Name</h1>
        <br />
        <input type="text" placeholder="Enter Room" onChange={(e)=>{setRoomName(e.target.value)}}/>
        <br />  
        <button onClick={()=>handleCreateRoom(roomName)}>Create Room</button>
    </div>
}