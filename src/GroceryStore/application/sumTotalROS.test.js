const { SumTotalROS } = require("./sumTotalROS")
const {
  ROSReaderLibraryFake,
} = require("../infrastructure/ROSReaderLibraryFake")

describe("sum total ROS", () => {
  it("sums all the prices of the products in the ROS", () => {
    const rosReaderLibrary = new ROSReaderLibraryFake(`
    bread, 1, 2
    12-pack of eggs, 1, 3
    `)
    const sumTotalROS = new SumTotalROS(rosReaderLibrary)

    const result = sumTotalROS.execute("irrelevant")

    expect(result).toEqual(5)
  })
  it("sums all the prices of the products in the ROS", () => {
    const rosReaderLibrary = new ROSReaderLibraryFake(`
    bread, 1, 2
    12-pack of eggs, 1, 3
    coca cola (33cl), 10, 2.5
    `)
    const sumTotalROS = new SumTotalROS(rosReaderLibrary)

    const result = sumTotalROS.execute("irrelevant")

    expect(result).toEqual(30)
  })
})
