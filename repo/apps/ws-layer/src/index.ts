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
            
        }
    })

})

