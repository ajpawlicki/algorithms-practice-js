/*
  Find number of valid paths from top left of matrix to bottom right of matrix.
  Constraints:
    1. Can only move to spot if it is a 1.
    2. Can only move down or right.
*/

const matrix1 = [
  [1,1,1],
  [1,1,1],
  [1,1,1],
];

const matrix2 = [
  [1,1,0],
  [1,1,1],
  [1,1,1],
];

const matrix3 = [
  [0,1,1],
  [1,1,1],
  [1,1,1],
];

const findPaths = (matrix, row = 0, col = 0) => {
  const maxRow = matrix.length - 1;
  const maxCol = matrix[0].length - 1;

  if (matrix[row][col] === 0) return 0;

  if (row === maxRow && col === maxCol) return 1;

  let down = 0;
  let right = 0;
  
  if (row + 1 <= maxRow && matrix[row + 1][col] === 1) {
    down = findPaths(matrix, row + 1, col);
  }

  if (col + 1 <= maxCol && matrix[row][col + 1] === 1) {
    right = findPaths(matrix, row, col + 1);
  }
  
  return down + right;
};

console.assert(findPaths(matrix1) === 6);
console.assert(findPaths(matrix2) === 5);
console.assert(findPaths(matrix3) === 0);