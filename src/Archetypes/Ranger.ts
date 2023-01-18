import Archeotype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archeotype {
  private _energy: EnergyType;
  static _createdInstances = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'stamina';
    Ranger._createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdInstances;
  }
}
