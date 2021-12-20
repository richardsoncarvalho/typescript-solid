import { ShoppingCart } from './ShoppingCart';
import { OrderStatus } from "./interfaces/OrderStatus";
import { Messaging } from '../services/Messaging';
import { Persistency } from '../services/Persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor (
    private readonly cart: ShoppingCart,
    private readonly message: Messaging,
    private readonly persistency: Persistency
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout():void {
    if (this.cart.isEmpty()) {
      console.log('Seu Carrinho está vazio!');
      return;
    }

    this._orderStatus = 'closed';
    this.message.sendMessage('Seu pedido foi recebido!')
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
