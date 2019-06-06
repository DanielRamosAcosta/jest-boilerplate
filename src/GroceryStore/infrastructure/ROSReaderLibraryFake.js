const { ROSReaderLibrary } = require("../domain/ROSReaderLibrary")

class ROSReaderLibraryFake extends ROSReaderLibrary {
  constructor(fakeFile) {
    super()
    this.fakeFile = fakeFile
  }

  fromFile(path) {
    return this.fakeFile
  }
}

module.exports = {
  ROSReaderLibraryFake,
}
