import Archeotype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archeotype {
  private _energy: EnergyType;
  static _createdInstances = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'stamina';
    Warrior._createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdInstances;
  }
}
