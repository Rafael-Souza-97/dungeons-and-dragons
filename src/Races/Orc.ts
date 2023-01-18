import Race from './Race';

export default class Orc extends Race {
  private _maxLife: number;
  static _createdInstances = 0;

  constructor(
    name:string,
    dexterity:number,
  ) {
    super(name, dexterity);
    this._maxLife = 74;
    Orc._createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Orc._createdInstances;
  }
}