import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monsters: SimpleFighter[];

  constructor(player1: Fighter, monsters: SimpleFighter[]) {
    super(player1);
    this._character = player1;
    this._monsters = monsters;
  }

  get player1(): Fighter { 
    return this._character;
  }

  get monsters(): SimpleFighter[] {
    return this._monsters;
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (this._character.lifePoints > 0 && monster.lifePoints > 0) {
        monster.receiveDamage(this._character.strength);
        this._character.receiveDamage(monster.strength);
      }
    });

    return super.fight();
  }
}
