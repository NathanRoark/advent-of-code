export function Part1(input: string) {
  return input
    .trim()
    .split(/\n\n/)
    .map((line) => line.trim().split(/\n/))
    .map((grid) => {
      const row = findMirror(grid);
      const col = findMirror(transpose(grid));
      return row * 100 + col;
    })
    .reduce((a, b) => a + b, 0);
}

function findMirror(grid: string[]): number {
  next: for (let i = 1; i < grid.length; i++) {
    let above = grid.slice(0, i).reverse(); // grid above
    let below = grid.slice(i); // grid below
    const len = Math.min(above.length, below.length);
    above = above.slice(0, len);
    below = below.slice(0, len);
    for (let line = 0; line < len; line++) {
      for (let char = 0; char < below[line].length; char++) {
        if (above[line][char] !== below[line][char]) {
          continue next
        }
      }
    }
    return i;
  }
  return 0;
}

function transpose(inputGrid: string[]) {
  const grid = inputGrid.map((ln) => ln.split(""));
  return grid[0]
    .map((_, j) => grid.map((_, i) => grid[i][j]))
    .map((row) => row.join(""));
}
