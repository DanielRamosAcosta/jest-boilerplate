class SumTotalROSController {
  constructor(sumTotalROS) {
    this.sumTotalROS = sumTotalROS
  }

  execute() {
    this.sumTotalROS.execute(process.argv[3])
  }
}

module.exports = {
  SumTotalROSController,
}
