import { Room } from "./room";

export class Player {
    inventory: string[]; // inventaire du joueur

    // crée un joueur avec un inventaire (vide par defaut)
    constructor(inventory: string[] = []) {
        this.inventory = inventory; // initialise l’inventaire du joueur
    }
}