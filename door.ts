export class Door {
  private isOpen: boolean; // indique si la porte est actuellement ouverte
  private requiredKey: string | null; // la clé nécessaire pour ouvrir la porte (null si aucune clé n'est requise)
  private riddleAnswer: string | null;  // réponse correcte de l'énigme (null si aucune énigme)
  private riddleSolved: boolean; // indique si l'énigme a été résolue


  // créer une porte fermée par defaut, sauf indication contraire
  constructor(isOpen: boolean = false, requiredKey: string | null = null, riddleAnswer: string | null = null) { // initialise l'état de la porte, la clé et l'énigme
    this.isOpen = isOpen; // définit l'état initial de la porte
    this.requiredKey = requiredKey; // mémorise la clé nécessaire pour ouvrir la porte
    this.riddleAnswer = riddleAnswer; // mémorise la réponse correcte de l'énigme
    this.riddleSolved = false; // l'énigme n'est pas résolue par défaut
  }

  // vérifie si la porte est franchie (uniquement si elle est ouverte)
  canBeCrossed(): boolean {
    return this.isOpen;
  }

  // Ouvre la porte si le joueur possède la clé requise (ou si aucune clé n'est nécessaire)
  // Si une clé est utilisée, elle est retirée de l'inventaire du joueur
  open(playerKeys: string[]): boolean {
    //la méthode retourne un booleen
    if (this.requiredKey === null) {
      this.isOpen = true; // on ouvre la porte
      return true; // aucune clé requise, la porte s'ouvre directement
    }
    const keyIndex = playerKeys.indexOf(this.requiredKey); // position de la clé dans l'inventaire
    if (keyIndex === -1) {

        return false; // le joueur n'a pas la bonne clé, la porte reste fermée
    }

    playerKeys.splice(keyIndex, 1); //retire la clé utilisée de l'inventaire
    this.isOpen = true;
    return true;
  }

  //Tente de résoudre l'énigme avec la réponse fournie par le joueur
  solveRiddle(answer:string):boolean {
    if(answer!==this.riddleAnswer) {
      return false; //mauvaise réponse, l'énigme reste non résolue
    }
    this.riddleSolved = true; //bonne réponse, l'énigme est résolue
    return true;
  }
}
