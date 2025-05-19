export class Winner {

    /**
     * User name
     */
    name: string;

    /**
     * Number of wins
     */
    wins: number;

    constructor(name: string, wins: number) {
        this.name = name;
        this.wins = wins;
    }
}