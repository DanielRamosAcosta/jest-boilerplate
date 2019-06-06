const { Product } = require("./Product")

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
        name: f[0],
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
    let sum = 0

    for (const productAndAmount of this.productAndAmountList) {
      console.log(productAndAmount)
      sum += productAndAmount.product.getPriceForAmount(productAndAmount.amount)
    }

    return sum
  }
}

module.exports = {
  ROS,
}
