const { ROS } = require("../domain/ROS")

class SumTotalROS {
  constructor(ROSReaderLibrary) {
    this.ROSReaderLibrary = ROSReaderLibrary
  }

  execute(path) {
    const text = this.ROSReaderLibrary.fromFile(path)

    const ros = ROS.fromRosString(text)

    return ros.calculateTotalPrice()
  }
}

module.exports = {
  SumTotalROS,
}
