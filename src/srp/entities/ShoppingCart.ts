import { Discount } from "./Discount/Discount";
import { CartItem } from "./interfaces/CartItem";
import { IShoppingCart } from './interfaces/IShoppingCart';
export class ShoppingCart implements IShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    const total = +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
    return this.discount.calculate(total);
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  clear(): void {
    this._items.length = 0;
  }
}
