const { SumTotalROS } = require("../GroceryStore/application/sumTotalROS")
const {
  ROSReaderLibraryFS,
} = require("../GroceryStore/infrastructure/ROSReaderLibraryFS")
const { SumTotalROSController } = require("./controllers/sumTotalROSController")

const command = process.argv[2]

if (command === "SumROS") {
  const rosReaderLibraryFS = new ROSReaderLibraryFS()
  const sumTotalROS = new SumTotalROS(rosReaderLibraryFS)
  const sumTotalROSController = new SumTotalROSController(sumTotalROS)

  sumTotalROSController.execute()
  process.exit()
}

console.log(`Unknown command ${command}`)
