export enum MessageType {

    // Personal response
    Registration = "reg",

    CreateRoom = 'create_room',
    AddUserToRoom = 'add_user_to_room',
    AddShips = 'add_ships',

    // Response for the game room
    CreateGame = 'create_game',
    StartGame = 'start_game',
    Turn = 'turn',
    Attack = 'attack',
    RandomAttack = 'randomAttack',
    Finish = 'finish',

    // Response for all
    UpdateWinners = 'update_winners',
    UpdateRoom = 'update_room',
}

export interface IMessage {
    type: MessageType,
    id: 0,
}

export class Message implements IMessage {
    type: MessageType;
    id = 0 as const;

    constructor(type: MessageType) {
        this.type = type;
    }
}

