import crypto from "node:crypto";
import { Player } from "../models/Player";
import { Ship } from "../models/Ship";

export class Game {
    gameId: string;
    players: Player[] = [];
    playerTurnId: string;

    createGame = (playerOneId: string, playerTwoId: string) => {
        this.gameId = crypto.randomUUID();
        this.players = [
            { index: playerOneId, ships: [] },
            { index: playerTwoId, ships: [] }
        ];
        this.playerTurnId = playerOneId;
        return this;
    };

    addShips = (gameId: string, indexPlayer: string, ships: Ship[]) => {
        if (this.gameId === gameId) {
            this.players?.forEach(player => {
                if (player.index === indexPlayer) {
                    player.ships = ships;
                }
            })
        }
    }

    getPlayerShipsById = (playerId: string) => {
        return this.players.find(player => player.index === playerId)?.ships;
    }
}

