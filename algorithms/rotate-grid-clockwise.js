// rotate grid clockwise in place

const rotate = (grid) => {
  const n = grid.length;

  for (let layer = 0; layer < n/2; layer++) {
    let start = layer;
    let end = n - layer - 1;

    for (let i = start; i < end; i++) {
      let offset = i - start
      
      let saved = grid[start][i];
      
      grid[start][i] = grid[end - offset][start];
      grid[end - offset][start] = grid[end][end - offset];
      grid[end][end - offset] = grid[i][end];
      grid[i][end] = saved;
    }
  }

  return grid;
};

const grid1 = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];

const grid2 = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
];

console.log(rotate(grid1));
console.log(rotate(grid2));
