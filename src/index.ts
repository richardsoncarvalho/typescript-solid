import { ShoppingCart } from './srp/entities/ShoppingCart';
import { Order } from './srp/entities/Order';
import { Messaging } from './srp/services/Messaging';
import { Persistency } from './srp/services/Persistency';
import { Product } from './srp/entities/Product';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9))
shoppingCart.addItem(new Product('Caderno', 9.9))
shoppingCart.addItem(new Product('Lápis', 1.59))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(order.orderStatus)
order.checkout()
