// Websocket layer.
import {WebSocket,WebSocketServer} from "ws";


interface sockets{
    sender:WebSocket | null;
    receiver:WebSocket | null;
}

const sessions = new Map<any,sockets>();

const wss:WebSocket | any = new WebSocketServer({port:8080});

wss.on('connection',function newConnection(ws:WebSocket,req:any){
    console.log("New Connection!");
    ws.on('error',console.error);

    ws.on('message',function message(data:any,isBinary){
        const msg = JSON.parse(data);
        console.log(sessions);
        console.log(msg);
        if(msg.type === "sender"){
            const roomId = msg.roomId;
            sessions.set(roomId,{sender:ws,receiver:null});
            ws.send(JSON.stringify({msg:"Connection Established by Sender."}))
        }else if(msg.type === "receiver"){
            const roomId = msg.roomId;
            const existingSession = sessions.get(roomId);
            if(!existingSession){
                return ws.send(JSON.stringify({"error":"Session Not Found!"}))
            }
            if(existingSession){
                existingSession.receiver = ws;
                existingSession.receiver.send(JSON.stringify({msg:"Connection Established by Receiver."}))
            }
            
        }else if(msg.type === "create-offer"){
            const sdp = msg.sdp;
            console.log("Sender side SDP: ",sdp)
            const senderSocket = getSocketbySession(ws);
            senderSocket?.receiver?.send(JSON.stringify({type:'sender-remote-description',sdp:sdp}));
        }else if(msg.type === "create-answer"){
            const sdp = msg.sdp;
            console.log("Receiver Side SDP : ",sdp);
            const receiverSocket = getSocketbySession(ws);
            receiverSocket?.sender?.send(JSON.stringify({type:'receiver-remote-description',sdp:sdp}));
        }else if(msg.type === "sender-iceCandidate"){
            const candidate = msg.candidate;
            const receiverSocket = getSocketbySession(ws);
            receiverSocket?.receiver?.send(JSON.stringify({type:'sender-iceCandidate',candidate:candidate}));
        }else if(msg.type === "receiver-iceCandidate"){
            const candidate = msg.candidate;
            const senderSocket = getSocketbySession(ws);
            senderSocket?.sender?.send(JSON.stringify({type:'receiver-iceCandidate',candidate:candidate}));
        }
    })

})


// Function to Get Socket by Session
function getSocketbySession(ws:WebSocket){
    for(const[roomId,session] of sessions.entries()){
        if(session.sender === ws || session.receiver === ws){
            return session;
        }
    }
    return null;
}