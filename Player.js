class Player {
  constructor() {
    this.health = 20;
  }

  fullHealth(warrior) {
    return warrior.health() === this.health;
  }

  walkOrRest(warrior) {
    return this.fullHealth(warrior)
          ? warrior.walk()
          : warrior.rest();
  }

  playTurn(warrior) {
    warrior.feel().isEmpty()
      ? this.walkOrRest(warrior)
      : warrior.attack();
  }
}
