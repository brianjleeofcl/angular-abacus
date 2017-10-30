import { Rod } from './rod';

export class Abacus {
  private rods: Rod[];

  constructor(rowCount: number) {
    const rods = [];
    for (let index = 0; index < rowCount; index++) {
      rods[index] = new Rod();
    }
    this.rods = rods;
  }

  public getValue(): number {
    return this.rods.reduce((sum, val, index) => sum + val.getValue() * (10 ** index), 0)
  }
}
