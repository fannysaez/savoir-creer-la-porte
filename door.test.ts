import { describe, expect, it } from "vitest";
import { Door } from "./door";

describe("Door", () => {
  it("ne peut pas être franchie lorsqu'elle est fermée", () => {
    const door = new Door(); // pas de clé requise (requiredKey = null)

    expect(door.canBeCrossed()).toBe(false);
  });

   it("peut être franchie lorsqu'elle est ouverte", () => {
    const door = new Door(true); // ouverte

    // Une porte ouverte peut être franchie.
    expect(door.canBeCrossed()).toBe(true);
  });
});

describe("Door avec une clé", () => {
  it("peut être ouverte si le joueur possède la bonne clé", () => {
    const door = new Door(false, "red-key"); // fermée, nécessite la clé rouge
    const success = door.open(["red-key"]);

    expect(success).toBe(true);  // open() réussit, le joueur a la bonne clé
    expect(door.canBeCrossed()).toBe(true); // la porte est ouverte, donc franchissable
  });

  it("ne peut pas être ouverte si le joueur ne possède pas la bonne clé",() => {
    const door = new Door(false, "red-key"); // fermée, nécessite la clé rouge
    const success = door.open(["blue-key"]); // le joueur a la mauvaise clée

    expect(success).toBe(false); // open() échoue, le joueur n'a pas la bonne clé
    expect(door.canBeCrossed()).toBe(false); // la porte reste fermée, donc infranchissable
  })

});

describe("Door - retrait de la clé de l'inventaire", () => {
    it("retire la clé de l'inventaire une fois la porte ouverte", () => {
        const door = new Door(false, "red-key");
        const inventory = ["red-key", "torch"];

        door.open(inventory);

        expect(door.canBeCrossed()).toBe(true); //la porte est ouverte
        expect(inventory).not.toContain("red-key"); //la clé utilisée est retirée
        expect(inventory).toContain("torch"); // les autres objets sont conservés
    });
});