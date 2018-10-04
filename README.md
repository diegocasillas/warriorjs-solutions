# diegocasillas - Baby Steps

### _For players new to WarriorJS_

## Level 4

_You can hear bow strings being stretched._

> **TIP:** No new abilities this time, but you must be careful not to rest while taking damage. Save a `this.health` variable and compare it on each turn to see if you're taking damage.

> **CLUE:** Set `this.health` to your current health at the end of `playTurn`. If this is greater than your current health next turn, then you know you're taking damage and shouldn't rest.

### Floor Map

```
╔═══════╗
║@ Sa S>║
╚═══════╝

@ = diegocasillas (20 HP)
S = Thick Sludge (24 HP)
a = Archer (7 HP)
> = stairs
```

## Abilities

### Actions (only one per turn)

- `warrior.attack()`: Attack a unit in the given direction (forward by default) dealing 5 HP of damage.
- `warrior.rest()`: Gain 10% of max health back, but do nothing more.
- `warrior.walk()`: Move one space in the given direction (forward by default).

### Senses

- `warrior.feel()`: Return the adjacent space in the given direction (forward by default).
- `warrior.health()`: Return an integer representing your health.
- `warrior.think()`: Think out loud (`console.log` replacement).

## Next Steps

When you're done editing `Player.js`, run the `warriorjs` command again.
