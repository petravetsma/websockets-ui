import {Storage} from "../storage/Storage";
import {ExtendedWebSocket} from "../models/ExtendedWebSocket";
import {Server} from "ws";
import {Ship} from "../models/Ship";
import {startGame} from "../responses/StartGame";
import {turn} from "../responses/Turn";

export const addShips = (
    data: unknown,
    storage: Storage,
    _socket: ExtendedWebSocket,
    server: Server
): void => {
    const game = data as { gameId: string, ships: Ship[], indexPlayer: string };
    storage.game.addShips(game.gameId, game.indexPlayer, game.ships);

    if (storage.game.players.every(player => !!player.ships.length)) {

        const playersId = [storage.game.players[0]!.index, storage.game.players[1]!.index];

        startGame(playersId[0]!, playersId[1]!, storage, server);
        turn(playersId[0]!, playersId[1]!, storage, server);
    }
};