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