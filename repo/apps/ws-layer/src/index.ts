// Websocket layer.
import {WebSocket,WebSocketServer} from "ws";

const wss:WebSocket | any = new WebSocketServer({port:8080});


wss.on('connection',function newConnection(ws:WebSocket){
    console.log("New Connection!");
    ws.on('error',console.error);

    ws.on('message',function message(data:any){
        const msg = JSON.parse(data);
        console.log(msg);
    })

})

