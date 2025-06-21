import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { joinSession } from "../api/api";

const token = localStorage.getItem("JWT");
console.log("JOIN SESSIOn",token);
export default function JoinSession(){
    const [sessionCode,setSessionCode] = useState<string|null>(null);
    const navigate = useNavigate();
    
    async function handleJoinSession(){
        try{
            const response = await joinSession(sessionCode);
        console.log("JOIN SESSIONS MESSAGE: ",response.data.msg);
        if(response.status === 200){
            const sessionId = response.data.sessionId;
            console.log("SESSION ID ",sessionId)
            navigate("/nreceiver",{state:{sessionCode:sessionCode,sessionId:sessionId}})

        }
        
        }catch(error){
            // @ts-ignore
            if(error.response){
                // @ts-ignore
                const status = error.response.status;
                // @ts-ignore
                const message = error.response.msg;
                console.log("Status : ", status)
                console.log("Message : ", message)

                if(status === 400){
                    console.log(message);
                }else{
                    console.log("Something Went Wrong!")
                }
            
            }
            
        }
        
    }
    return <div>

        <h1>Enter Session URL or ID</h1>
        <br />
        <input type="text" placeholder="Enter Session URL or ID" onChange={(e)=>setSessionCode(e.target.value)} />
        <br />
        <button onClick={handleJoinSession}>Join Session</button>

    </div>
}