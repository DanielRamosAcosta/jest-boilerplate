const { SumTotalROS } = require("../../GroceryStore/application/sumTotalROS")
const {
  ROSReaderLibraryFS,
} = require("../../GroceryStore/infrastructure/ROSReaderLibraryFS")
const {
  SumTotalROSController,
} = require("../controllers/sumTotalROSController")

function sumTotalRosFactory() {
  const rosReaderLibraryFS = new ROSReaderLibraryFS()
  const sumTotalROS = new SumTotalROS(rosReaderLibraryFS)
  const sumTotalROSController = new SumTotalROSController(sumTotalROS)
  return sumTotalROSController
}

module.exports = {
  sumTotalRosFactory,
}
