import axios from "axios";

const token = localStorage.getItem("JWT");


// Session api's
export async function fetchAllSessions() {
  const response = await axios.get(
    `http://localhost:3001/api/v1/sessions/get-all-sessions`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response.data);
  return response.data;
}

export async function createSession(sessionName: string) {
    const response = await axios.post(
      `http://localhost:3001/api/v1/sessions/create-session`,
      { sessionName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
}

export async function joinSession(sessionCode:string|null){
    
    const response = await axios.post(`http://localhost:3001/api/v1/sessions/joinSession`,{sessionCode},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });

    return response;

}

export async function getSession(sessionCode:string|null){
        const response = await axios.get(`http://localhost:3001/api/v1/sessions/get-session/${sessionCode}`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        console.log(response.data.session.tracks);
    
    return response;
    }
    

// user auth api's

export async function login(email:string,password:string){
    const response = await axios.post('http://localhost:3001/api/v1/user/signin',{email:email,password:password});
    return response;
}

export async function signUp(name:string,email:string,password:string){
     const response = await axios.post(`http://localhost:3001/api/v1/user/signup`,{
        name:name,email:email,password:password
      });
      return response;
}


// Nsender & NReceiver api's
export async function sendChunksToBackend(formData:any){
    const response = await axios.post(`http://localhost:3001/api/v1/recordings/chunks`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    return response;
}

export async function sendFinalCallToEndOfRecordingApi(roomName:string,userType:string,sessionId:string){
    const response = await axios.post(`http://localhost:3001/api/v1/recordings/merge-upload-s3`, 
        { sessionName: roomName,userType,sessionId }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    return response;
}


export async function getAllVideosApi(sessionId:string){ 
    const response = await axios.get(`http://localhost:3001/api/v1/recordings/get-session-videos/${sessionId}`,
      {
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response;
}
