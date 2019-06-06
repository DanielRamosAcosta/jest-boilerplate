class Product {
  constructor(name, price) {
    this._name = name
    this._price = price
  }

  getPriceForAmount(amount) {
    return this._price * amount
  }
}

module.exports = {
  Product,
}
