import Race from './Race';

export default class Halfling extends Race {
  private _maxLife: number;
  static _createdInstances = 0;

  constructor(
    name:string,
    dexterity:number,
  ) {
    super(name, dexterity);
    this._maxLife = 60;
    Halfling._createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Halfling._createdInstances;
  }
}
