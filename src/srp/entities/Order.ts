import { OrderStatus } from "./interfaces/OrderStatus";
import { IShoppingCart } from './interfaces/IShoppingCart';
import { IMessaging } from './interfaces/IMessaging';
import { IPersistency } from './interfaces/IPersistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor (
    private readonly cart: IShoppingCart,
    private readonly message: IMessaging,
    private readonly persistency: IPersistency
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
