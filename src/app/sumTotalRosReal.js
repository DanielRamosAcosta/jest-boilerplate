const { SumTotalROS } = require("./SumTotalROS")
const {
  ROSReaderLibraryFS,
} = require("../GroceryStore/infrastructure/ROSReaderLibraryFS")

const sumTotalROS = new SumTotalROS(new ROSReaderLibraryFS())

console.log(sumTotalROS.execute(process.argv[2]))
