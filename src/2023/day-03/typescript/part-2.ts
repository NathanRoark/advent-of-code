// advent of code 2023 day 3 part 1

export function Part2(input: string) {
  return findGearRatios(input
    .trim()
    .split("\n")
    .map((line) => line.replace(/[^\d\.\*]/g, '.')))
    .flat().map((number) => number!)
    .reduce((a, b) => a + b)
}

function findGearRatios(schematic: string[]) {
  return schematic.map((row, rowIndex) => {
    return [...row.matchAll(/\*/g)].map((gear) => {
      const partNumbers: number[] = []
      const start = gear.index! - 1 >= 0 ? gear.index! - 1 : 0
      const temp = gear.index! + gear[0].length - 1
      const end = temp + 2 < row.length ? temp + 2 : row.length - 1
      if (schematic[rowIndex - 1]?.slice(start, end).match(/\d+/)) { // row above
        [...schematic[rowIndex - 1].matchAll(/\d+/g)].map((number) => {
          const end = number.index! + number[0].length - 1
          if (number.index! - 1 <= gear.index! && gear.index! <= end + 1)
            partNumbers.push(+number[0])
        })
      }
      if (schematic[rowIndex + 1]?.slice(start, end).match(/\d+/)) { // row below
        [...schematic[rowIndex + 1].matchAll(/\d+/g)].map((number) => {
          const end = number.index! + number[0].length - 1
          if (number.index! - 1 <= gear.index! && gear.index! <= end + 1)
            partNumbers.push(+number[0])
        })
      }
      if (row[gear.index! - 1].match(/\d+/)) { // left number
        [...row.matchAll(/\d+/g)].map((number) => {
          if (gear.index == number.index! + number[0].length)
            partNumbers.push(+number[0])
        })
      }
      if (row[gear.index! + 1].match(/\d+/)) { // right number
        [...row.matchAll(/\d+/g)].map((number) => {
          if (gear.index == number.index! - 1)
            partNumbers.push(+number[0])
        })
      }
      if (partNumbers.length === 2) return partNumbers[0] * partNumbers[1]
    }).filter((number) => number!)
  })
}
