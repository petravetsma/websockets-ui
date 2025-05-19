import {Storage} from "../storage/Storage";
import {User} from "../models/User";
import {registration as regResponse} from "../responses/Registration";
import {updateWinners} from "../responses/UpdateWinners";
import {updateRoom} from "../responses/UpdateRoom";
import {ExtendedWebSocket} from "../models/ExtendedWebSocket";
import {Server} from "ws";
import console from "node:console";

export const registration = (
    data: unknown,
    storage: Storage,
    socket: ExtendedWebSocket,
    server: Server
): void => {

    if (storage.users.users.find(user => user.name === (data as User).name)) {

        console.log(`User with name ${(data as User).name} already connected!`)

    } else {
        const user = storage.users.reg(data as User);
        socket.userIndex = user.index;

        regResponse(user, socket);

        updateRoom(storage, server);

        updateWinners(storage, socket);

    }
};