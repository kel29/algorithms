// Create a Stack class which also has a function `min` that returns
// the minimum element. Functions `push`, `pop`, and `min` should all
// operate in O(1) time.

class Stack {
  constructor () {
    this.stackLength = 0
    this.stack = []
    this.minsLength = 0
    this.minsIndices = []
  }

  min () {
    return this.stack[this.minsIndices[this.minsLength - 1]]
  }

  push (val) {
    this.stack[this.stackLength] = val
    if (val < this.min() || this.stackLength === 0) {
      this.minsIndices[this.minsLength] = this.stackLength
      this.minsLength += 1
    }
    this.stackLength += 1
  }

  pop () {
    const val = this.stack[this.stackLength - 1]
    this.stackLength -= 1
    if (this.minsIndices[this.minsLength - 1] === this.stackLength) {
      this.minsLength -= 1
    }
    return val
  }
}
