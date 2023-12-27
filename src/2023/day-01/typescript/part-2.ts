const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine",];
export function Part2(input: string) {
  return input
    .trim()
    .split("\n")
    .map((line) => line.trim().split("")
      .map((char, index) =>
        char.match(/\d/)
          ? char
          : words.findIndex((word) => line.slice(index).startsWith(word)) + 1,
      )
      .filter((num) => num !== 0)
      .map(Number))
    .map((numbers) => numbers[0] * 10 + numbers[numbers.length - 1])
    .reduce((a, b) => a + b);
}
