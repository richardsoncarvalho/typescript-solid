export abstract class Discount {
  protected discount: number = 0;

  calculate (price: number): number {
    return price - (price * this.discount);
  };
}
