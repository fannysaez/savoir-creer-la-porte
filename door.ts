export class Door {
  private isOpen: boolean;
  private requiredKey: string | null;

  constructor(isOpen: boolean = false, requiredKey: string | null = null) {
    this.isOpen = isOpen;
    this.requiredKey = requiredKey;
  }

  // Une porte fermée ne peut pas être franchie
  canBeCrossed(): boolean {
    return this.isOpen;
  }

  // Ouvre la porte si le joueur possède la clé requise (ou si aucune clé n'est nécessaire)
  open(playerKeys: string[]): boolean {
    if (this.requiredKey === null || playerKeys.includes(this.requiredKey)) {
      this.isOpen = true;
      return true;
    }
    return false;
  }
}