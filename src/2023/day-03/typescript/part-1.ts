// advent of code 2023 day 3 part 1

export function Part1(input: string) {
  return findPartNumbers(input
    .trim()
    .split("\n")
    .map((line) => line.replace(/[^\d\.]/g, 'x')))
    .flat().map((number) => +number[0])
    .reduce((a, b) => a + b)
}

function findPartNumbers(schematic: string[]) {
  return schematic.map((row, rowIndex) => {
    return [...row.matchAll(/\d+/g)].filter((number) => {
      const start = number.index! - 1 >= 0 ? number.index! - 1 : 0
      const temp = number.index! + number[0].length - 1
      const end = temp + 2 < row.length ? temp + 2 : row.length - 1
      return schematic[rowIndex - 1]?.slice(start, end)?.includes('x') // row above
        || schematic[rowIndex + 1]?.slice(start, end)?.includes('x') // row below
        || row[number.index! - 1] === 'x' // left char
        || row[number.index! + number[0].length] === 'x' // right char
    })
  })
}
