// const fs = require("fs")
const { ROSReaderLibrary } = require("../GroceryStore/domain/ROSReaderLibrary")

// const file = fs.readFileSync(process.argv[2], "utf8")

class SumTotalROS {
  /**
   * @param {ROSReaderLibrary} ROSReaderLibrary
   */
  constructor(ROSReaderLibrary) {
    this.ROSReaderLibrary = ROSReaderLibrary
  }

  execute(path) {
    const text = this.ROSReaderLibrary.fromFile(path)
    const foo = text.split("\n").map(e => {
      return e.split(",")
    })

    return 5
    console.log(foo)
  }
}

module.exports = {
  SumTotalROS,
}
