const {
  sumTotalRosFactory: createSumTotalROSController,
} = require("./factories/createSumTotalROSController")

const command = process.argv[2]

if (command === "SumROS") {
  const sumTotalROSController = createSumTotalROSController()

  sumTotalROSController.execute()
  process.exit()
}

console.error(`Unknown command ${command}`)
