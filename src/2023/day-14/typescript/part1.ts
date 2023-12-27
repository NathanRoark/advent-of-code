export function Part1(input: string) {
  let grid = input
    .trim()
    .split(/\n/)
    .map((line) => line.trim().split(""));

  grid = transpose(grid);

  for (let row = 0; row < grid.length; row++) {
    // swap all the O's to the left as far as they can go
    // they can swap with a . but not a #
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "O") {
        let i = col - 1;
        while (i >= 0 && grid[row][i] === ".") {
          swap(grid[row], i, i + 1);
          i--;
        }
      }
    }
  }

  grid = transpose(grid);

  return grid
    .map((row, i) => (row.join().match(/O/g)?.length ?? 0) * (grid.length - i))
    .reduce((acc, val) => acc + val, 0);
}

function swap<T>(array: T[], i: number, j: number) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function transpose<T>(input: T[][]) {
  return input[0].map((_, i) => input.map((array) => array[i]));
}
