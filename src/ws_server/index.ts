import {WebSocket, WebSocketServer} from 'ws';
import {messageHandler} from "./messages/HandleMessage";
import {deserializeMessage} from "./utils/ParseMessage";
import {storage} from "./storage/Storage";

export const wsServer = (port: number) => {

    const server = new WebSocketServer({ port, clientTracking: true });

    server.on('connection', (socket: WebSocket) => {
        console.log(`Player joined is joined. Players in session ${server.clients.size}`);

        socket.on('message', (data) => {
            try {
                const message = deserializeMessage(data);
                messageHandler(server, socket, message, storage);
            } catch (error) {
                console.error("Error connecting to WS server", error);
            }
        });

        socket.on('error', (error) => {
            console.error("Error connecting to WS server", error);
        })

        socket.on('close', () => {
            console.log(`Player left. Players in session ${server.clients.size}`);
        });
    });
}
