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
});