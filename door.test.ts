import { describe, expect, it } from "vitest";
import { Door } from "./door";

describe("Door", () => {
  it("ne peut pas être franchie lorsqu'elle est fermée", () => {
    const door = new Door(); // fermée par défaut

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

    expect(success).toBe(true);
    expect(door.canBeCrossed()).toBe(true);
  });
});