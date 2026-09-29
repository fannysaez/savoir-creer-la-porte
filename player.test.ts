import { describe, expect, it } from "vitest";
import { Player } from "./player";
import { Room } from "./room";

describe("Player", () => {
    it("ramasse un objet et le retire de la salle", () => {
        const room = new Room(["torch"]);
        const player = new Player();

        const success = player.pickUp("torch", room);

        expect(success).toBe(true); // le ramassage a reussi
        expect(player.inventory).toContain("torch"); // l'objet est dans l'inventaire du joueur
        expect(room.items).not.toContain("torch"); // l'objet n'est plus dans la salle
    
    });

    it("ne peut pas ramasser un objet déjà ramassé (absent de la salle", () => {
        const room = new Room(["torch"]);
        const player = new Player();

        player.pickUp("torch", room); // premier ramassage, réussi

        const success = player.pickUp("torch", room); // deuxième tentative sur le même objet

        expect(success).toBe(false); //le ramassage échoue, l'objet n'est plus dans la salle
        expect(player.inventory).toContain("torch"); // l'objet est bien dans l'inventaire ...
        expect(player.inventory.length).toBe(1); //... ms une seule fois, pas dublipé
    });
});

describe("Player - utilisation d'un objet", () => {
    it("peut utiliser un objet qu'il possède", () => {
        const player = new Player(["torch"]);
        const success = player.use("torch");

        expect(success).toBe(true); // le joueur possède l'objet, il l'utiliser
    });

    it("ne peut pas utiliser un objet qu'il ne possède pas", () => {
        const player = new Player();
        const success = player.use("torch");

        expect(success).toBe(false); //le joueur ne possède pas l'objet, il ne peut pas l'utiliser
    });
});