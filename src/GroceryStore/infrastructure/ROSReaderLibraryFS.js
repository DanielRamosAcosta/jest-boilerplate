const fs = require("fs")
const { ROSReaderLibrary } = require("../domain/ROSReaderLibrary")

class ROSReaderLibraryFS extends ROSReaderLibrary {
  fromFile(path) {
    return fs.readFileSync(path, "utf8")
  }
}

module.exports = {
  ROSReaderLibraryFS,
}
