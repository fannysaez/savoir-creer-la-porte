import { describe, expect, it } from "vitest";
import { Door } from "./door";
import { Alarm } from "./alarm";

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

    expect(success).toBe(true); // open() réussit, le joueur a la bonne clé
    expect(door.canBeCrossed()).toBe(true); // la porte est ouverte, donc franchissable
  });

  it("ne peut pas être ouverte si le joueur ne possède pas la bonne clé", () => {
    const door = new Door(false, "red-key"); // fermée, nécessite la clé rouge
    const success = door.open(["blue-key"]); // le joueur a la mauvaise clée

    expect(success).toBe(false); // open() échoue, le joueur n'a pas la bonne clé
    expect(door.canBeCrossed()).toBe(false); // la porte reste fermée, donc infranchissable
  });
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

describe("Door avec une énigme", () => {
  it("résout l'énigme avec la bonne réponse", () => {
    const door = new Door(true, null, "azur");
    const solved = door.solveRiddle("azur");

    expect(solved).toBe(true); // la bonne réponse résout l'énigme
  });

  it("ne résout pas l'énigme avec une mauvaise réponse", () => {
    const door = new Door(true, null, "azur");
    const solved = door.solveRiddle("rouge");

    expect(solved).toBe(false); // une mauvaise réponse ne résout pas l'énigme
  });

  it("ne peut pas être franchie si l'énigme n'est pas résolue", () => {
    const door = new Door(true, null, "azur");

    expect(door.canBeCrossed()).toBe(false); // la porte est ouverte mais l'énigme n'est pas résolue
  });

  it("peut être franchie si l'énigme est résolue", () => {
    const door = new Door(true, null, "azur");
    door.solveRiddle("azur");
    expect(door.canBeCrossed()).toBe(true); // la porte est ouverte est l'énigme est résolue
  });
});

describe("Door - énigme avec tentatives", () => {
  it("incrémente le nombre de tentatives échouées après une mauvaise réponse", () => {
    const door = new Door(true, null, "azur");
    door.solveRiddle("rouge");

    expect(door.getFailedAttempts()).toBe(1); // une tentative échouée
  });

  it("n'est pas verrouillée après 2 mauvaises réponses, une bonne réponse résout l'énigme", () => {
    const door = new Door(true, null, "azur");
    door.solveRiddle("rouge");
    door.solveRiddle("vert");

    const solved = door.solveRiddle("azur");

    expect(solved).toBe(true); // 2 échecs seulement, la bonne réponse fonctionne encore
  });

  it("déclenche une conséquence après 3 mauvaises réponses : la bonne réponse ne fonctionne plus", () => {
    const door = new Door(true, null, "azur");
    door.solveRiddle("rouge");
    door.solveRiddle("vert");
    door.solveRiddle("jaune");

    const solved = door.solveRiddle("azur");

    expect(solved).toBe(false); // énigme verrouillée après 3 échecs
  });

  it("ne peut pas résoudre une énigme déjà résolue une seconde fois", () => {
    const door = new Door(true, null, "azur");
    door.solveRiddle("azur"); // première résolution, réussie

    const solved = door.solveRiddle("azur"); // deuxième tentative

    expect(solved).toBe(false); // déjà résolue, ne peut pas l'être une seconde fois
  });
});

describe("Door avec une alarme", () => {
  it("ne peut pas être franchie si l'alarme liée est active", () => {
    const alarm = new Alarm();
    alarm.activate();
    const door = new Door(true, null, null, alarm); // ouverte, liée à l'alarme

    expect(door.canBeCrossed()).toBe(false);
  });

  it("peut être franchie si l'alarme liée est inactive", () => {
    const alarm = new Alarm();
    const door = new Door(true, null, null, alarm); // ouverte, liée à l'alarme inactive

    expect(door.canBeCrossed()).toBe(true);
  });

  it("reste franchissable si elle n'est liée à aucune alarme, même si une alarme existe et est active", () => {
    const alarm = new Alarm();
    alarm.activate();
    const door = new Door(true); // ouverte, pas liée à l'alarme

    expect(door.canBeCrossed()).toBe(true);
  });
});
