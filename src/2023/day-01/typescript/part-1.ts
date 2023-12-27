export function Part1(input: string) {
  return input
    .trim()
    .split("\n")
    .map((line) => Array.from(line.trim().matchAll(/\d/g)).map(Number))
    .map((numbers) => numbers[0] * 10 + numbers[numbers.length - 1])
    .reduce((a, b) => a + b);
}
