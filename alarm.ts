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

  // Désactive l'alarme si le joueur possède l'objet alarm-code (qui est alors consommé)
  deactivate(playerItems: string[]): boolean {
    const codeIndex = playerItems.indexOf("alarm-code"); // position du code dans l'inventaire

    if (codeIndex === -1) {
      return false; // le joueur n'a pas le code, l'alarme reste active
    }

    playerItems.splice(codeIndex, 1); // consomme le code utilisé
    this.active = false;
    return true;
  }
}
