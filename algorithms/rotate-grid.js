const grid1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

const grid2 = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
];

const grid3 = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25],
];

const grid4 = [
  [1,2,3,4,5,6],
  [7,8,9,10,11,12],
  [13,14,15,16,17,18],
  [19,20,21,22,23,24],
  [25,26,27,28,29,30],
  [31,32,33,34,35,36],
];

const rotateGrid = (grid) => {
  const n = grid.length;

  for (let layer = 0; layer < (n / 2); layer++) {
    let start = layer;
    let end = n - layer - 1;

    for (let i = start; i < end; i++) {
      const saved = grid[start][i];
      
      grid[start][i] = grid[i][end];
      grid[i][end] = grid[end][end - i + start];
      grid[end][end - i + start] = grid[end - i + start][start];
      grid[end - i + start][start] = saved;
    }
  }

  return grid;
};

console.log(rotateGrid(grid1));
console.log(rotateGrid(grid2));
console.log(rotateGrid(grid3));
console.log(rotateGrid(grid4));
