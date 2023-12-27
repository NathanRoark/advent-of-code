export function Part2(input: string) {
  let grid = input
    .trim()
    .split(/\n/)
    .map((line) => line.trim().split(""));

  // use the grid as a key to detect cycles
  let key = <T>(grid: T[][]) => grid.map((row) => row.join("")).join("\n");

  // store the grid as key and the iteration it was seen at
  let seen = new Map<string, number>([]);

  // Perform work until we detect a cycle
  let iter = 0;
  do {
    seen.set(key(grid), iter++);
    grid = cycle(grid);
  } while (!seen.has(key(grid)));

  let remaining = 1_000_000_000 - iter;
  let cycleLength = iter - seen.get(key(grid))!;

  // work remaining after the closest cycle to 1 billion
  let todo = remaining % cycleLength;

  // Perform the remaining work
  for (let _ of Array(todo)) {
    grid = cycle(grid);
  }

  return grid
    .map((row, i) => (row.join().match(/O/g)?.length ?? 0) * (grid.length - i))
    .reduce((acc, val) => acc + val, 0);
}

function cycle<T>(grid: T[][]) {
  grid = tiltNorth(grid);
  grid = tiltWest(grid);
  grid = tiltSouth(grid);
  grid = tiltEast(grid);
  return grid;
}

// Tilt the grid north
function tiltNorth<T>(grid: T[][]) {
  grid = transpose(grid);
  grid = tilt(grid);
  return transpose(grid);
}

// Tilt the grid west
function tiltWest<T>(grid: T[][]) {
  grid = tilt(grid);
  grid = transpose(grid);
  return transpose(grid);
}

// Tilt the grid south
function tiltSouth<T>(grid: T[][]) {
  grid = grid.reverse();
  grid = transpose(grid);
  grid = tilt(grid);
  grid = transpose(grid);
  return grid.reverse();
}

// Tilt the grid east
function tiltEast<T>(grid: T[][]) {
  grid = grid.map((line) => line.reverse());
  grid = tilt(grid);
  return grid.map((line) => line.reverse());
}

function tilt<T>(grid: T[][]) {
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
  return grid;
}

function swap<T>(array: T[], i: number, j: number) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function transpose<T>(matrix: T[][]): T[][] {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}
