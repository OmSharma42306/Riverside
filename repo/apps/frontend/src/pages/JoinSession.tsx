import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const token = localStorage.getItem("JWT");
export default function JoinSession(){
    const [sessionCode,setSessionCode] = useState<string|null>(null);
    const navigate = useNavigate();
    
    async function handleJoinSession(){
        try{
            const response = await axios.post("http://localhost:3001/api/v1/sessions/joinSession",{sessionCode},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        console.log("JOIN SESSIONS MESSAGE: ",response.data.msg);
        if(response.status === 200){
            navigate("/receiver",{state:{sessionCode:sessionCode}})

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