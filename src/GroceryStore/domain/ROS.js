const { Product } = require("./Product")
const { ProductName } = require("./ProductName")

class ROS {
  constructor(productAndAmountList) {
    this.productAndAmountList = productAndAmountList
  }

  static fromRosString(rosString) {
    const foo = rosString
      .split("\n")
      .map(e => e.split(","))
      .filter(e => e.length === 3)
      .map(f => f.map(c => c.trim()))
      .map(f => ({
        name: new ProductName(f[0]),
        amount: Number(f[1]),
        price: Number(f[2]),
      }))
      .map(f => ({
        product: new Product(f.name, f.price),
        amount: f.amount,
      }))

    return new ROS(foo)
  }

  calculateTotalPrice() {
    return this.productAndAmountList.reduce(
      (totalPrice, { product, amount }) =>
        totalPrice + product.getPriceForAmount(amount),
      0,
    )
  }
}

module.exports = {
  ROS,
}
