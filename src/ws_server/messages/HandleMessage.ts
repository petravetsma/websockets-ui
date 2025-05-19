import { Message } from "../models/Message";
import { MessageType } from "../models/MessageType";
import { Storage } from "../storage/Storage";
import { registration } from "../requests/Registration";
import { createRoom } from "../requests/CreateRoom";
import { addUserToRoom } from "../requests/AddUserToRoom";
import { Server, WebSocket } from "ws";
import { addShips } from "../requests/AddShips";

export const messageHandler = (
    server: Server,
    socket: WebSocket,
    message: Message<unknown>,
    storage: Storage
) => {
    switch (message.type) {

        case MessageType.REG: {
            registration(message.data, storage, socket, server);
            break;
        }

        case MessageType.CREATE_ROOM: {
            createRoom(message.data, storage, socket, server);
            break;
        }

        case MessageType.ADD_USER_TO_ROOM: {
            addUserToRoom(message.data, storage, socket, server);
            break;
        }

        case MessageType.ADD_SHIPS: {
            addShips(message.data, storage, socket, server);
            break;
        }

        default:
            break;
    }
}