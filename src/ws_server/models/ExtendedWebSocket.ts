import {WebSocket} from "ws";
import {User} from "./User";

export interface ExtendedWebSocket extends WebSocket {
    userIndex?: User["index"];
}
