// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated
// according to the following rules:

// - Each row must contain the digits 1-9 without repetition.
// - Each column must contain the digits 1-9 without repetition.
// - Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'

const isValidSudoku = function(board) {
  const nums = {
      row: { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} },
      col: { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} },
      box: {'00': {}, '01': {}, '02': {}, '10': {}, '11': {}, '12': {}, '20': {}, '21': {}, '22': {}}
  }
  
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const currentNum = board[i][j]
          if (currentNum === ".") continue
          
          const boxVal = `${Math.floor(i/3)}${Math.floor(j/3)}`
          
          if (nums.row[i][currentNum] || 
              nums.col[j][currentNum] || 
              nums.box[boxVal][currentNum]) return false
          
          nums.row[i][currentNum] = true
          nums.col[j][currentNum] = true
          nums.box[boxVal][currentNum] = true
      }
  }
  
  return true
}
