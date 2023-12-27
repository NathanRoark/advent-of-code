// advent of code 2021 day 3 part 1

export function Part1(input: string) {
  const lines = input
    .trim()
    .split('\n')
    .map((line) => line.split('')
      .map((char) => +char))

  // transpose the matrix
  const matrix: number[][] = lines[0]
    .map((_, col) => lines
      .map((row) => row[col]));

  // find most common bit in each column
  const gamma = matrix
    .map((row) => Math.round(
      row.reduce((a, b) => a + b) / row.length))

  // xor gamma with 1 to get epsilon
  const epsilon = gamma.map((bit) => bit ^ 1)

  return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2)
} 
