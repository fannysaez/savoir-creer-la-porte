export class Room {
    items: string[]; // liste des objets présents dans la salle

    // crée une salle avec une liste d'objet (vide par defaut)
    constructor(items: string[] = []) {
        this.items = items; // initialise les objets présents dans la salle
    }
}