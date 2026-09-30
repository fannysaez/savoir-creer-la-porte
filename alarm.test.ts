import { describe, expect, it } from "vitest";
import { Alarm } from "./alarm";

describe("Alarm", () => {
  it("est inactive par défaut", () => {
    const alarm = new Alarm();

    expect(alarm.isActive()).toBe(false);
  });

  it("devient active après activate()", () => {
    const alarm = new Alarm();
    alarm.activate();

    expect(alarm.isActive()).toBe(true);
  });
});

describe("Alarm - désactivation avec code", () => {
  it("se désactive avec le bon code", () => {
    const alarm = new Alarm();
    alarm.activate();
    const inventory = ["alarm-code"];

    const success = alarm.deactivate(inventory);

    expect(success).toBe(true); // le code est bon, l'alarme se désactive
    expect(alarm.isActive()).toBe(false);
  });

  it("ne se désactive pas sans le bon code", () => {
    const alarm = new Alarm();
    alarm.activate();
    const inventory: string[] = [];

    const success = alarm.deactivate(inventory);

    expect(success).toBe(false); // pas de code, l'alarme reste active
    expect(alarm.isActive()).toBe(true);
  });

  it("retire alarm-code de l'inventaire une fois utilisé", () => {
    const alarm = new Alarm();
    alarm.activate();
    const inventory = ["alarm-code", "torch"];

    alarm.deactivate(inventory);

    expect(inventory).not.toContain("alarm-code"); // le code est consommé
    expect(inventory).toContain("torch"); // les autres objets sont conservés
  });
});