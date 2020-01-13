// In Towers of Hanoi you have three towers and N disks of different sizes,
// which can slide onto any tower. The puzzle starts with the disks all on
// one tower, sorted in ascending order. You can only move one disk at a time,
// a disk is taken from the top of one tower when it is places on another
// tower, and a disk can only be placed on a larger disk (or an empty tower).
// Write a program to move the disks from the first tower to the last tower
// using stacks.

const moveDisk = (height, startTower, targetTower, bufferTower) => {
  if (height >= 1) {
    moveDisk(height - 1, startTower, bufferTower, targetTower)
    targetTower.push(startTower.pop())
    moveDisk(height - 1, bufferTower, targetTower, startTower)
  }
}

const towersOfHanoi = (height) => {
  const startTower = new Stack()
  const bufferTower = new Stack()
  const targetTower = new Stack()

  for (let i = height; i > 0; i--) {
    startTower.push(i)
  }

  moveDisk(height, startTower, bufferTower, targetTower)
}
