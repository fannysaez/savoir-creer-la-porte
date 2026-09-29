export class Door {
  private isOpen: boolean; // indique si la porte est actuellement ouverte
  private requiredKey: string | null; // la clé nécessaire pour ouvrir la porte (null si aucune clé n'est requise)

  // créer une porte fermée par defaut, sauf indication contraire
  constructor(isOpen: boolean = false, requiredKey: string | null = null) {
    this.isOpen = isOpen;
    this.requiredKey = requiredKey;
  }

  // vérifie si la porte est franchie (uniquement si elle est ouverte)
  canBeCrossed(): boolean {
    return this.isOpen;
  }

  // Ouvre la porte si le joueur possède la clé requise (ou si aucune clé n'est nécessaire)
  open(playerKeys: string[]): boolean { //la méthode retourne un booleen
    if (this.requiredKey === null || playerKeys.includes(this.requiredKey)) {
      this.isOpen = true;  // on ouvre la porte
      return true; //sinon elle retourne false
    }
    return false; // le joueur n'a pas la bonne clé, la porte reste fermée
  }
}