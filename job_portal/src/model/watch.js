export default class watchModel {
  constructor(userId, productId, id) {
    this.userId = userId;
    this.productId = productId;
    this.id = id;
  }

  static add(userId, productId, id) {
    const cartItem = new watchModel(userId, productId);
    cartItem.id = cart.length + 1;
    cart.push(cartItem);
    return cartItem;
  }
}
let cart = [new watchModel(1, 1)];
