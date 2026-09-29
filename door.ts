export class Door {
  private isOpen: boolean;

  constructor(isOpen: boolean = false) {
    this.isOpen = isOpen;
  }
  // Une porte fermée ne peut pas être franchie
  canBeCrossed(): boolean {
    return this.isOpen;
  }
}
