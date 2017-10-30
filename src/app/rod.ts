export class Rod {
  private above: 0 | 1;
  private below: 0 | 1 | 2 | 3 | 4;

  constructor(above: 0 | 1 = 0, below: 0 | 1 | 2 | 3 | 4 = 0) {
    this.above = 0;
    this.below = 0;
  }

  public setAbove(above: 0 | 1): void {
    this.above = above;
  }

  public setBelow(below: 0 | 1 | 2 | 3 | 4): void {
    this.below = below;
  }

  public getValue(): number {
    return this.above * 5 + this.below;
  }
}
