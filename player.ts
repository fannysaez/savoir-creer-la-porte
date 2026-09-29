import { Room } from "./room";

export class Player {
    inventory: string[]; // inventaire du joueur

    // crée un joueur avec un inventaire (vide par defaut)
    constructor(inventory: string[] = []) {
        this.inventory = inventory; // initialise l’inventaire du joueur
    }

    //Ramasse un objet présent dans la salle : l'ajoute à l'inventaire et la retire de la salle
    pickUp(item: string, room: Room): boolean {
        const itemIndex = room.items.indexOf(item); // position de l'objet dans la salle

        if(itemIndex === -1) {
            return false; // l'objet n'est pas dans la salle, rien à ramasser
        }

        room.items.splice(itemIndex, 1); //retire l'objet de la salle
        this.inventory.push(item); //ajoute l'objet à l'inventaire du joueur
        return true;
    }
}