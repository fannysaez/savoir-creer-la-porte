export class Alarm {
  private active: boolean; // indique si l'alarme est actuellement active

  // crée une alarme inactive par défaut
  constructor(active: boolean = false) {
    this.active = active;
  }

  // active l'alarme
  activate(): void {
    this.active = true;
  }

  // indique si l'alarme est actuellement active
  isActive(): boolean {
    return this.active;
  }
}