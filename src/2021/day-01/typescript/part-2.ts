// advent of code 2021 day 1 part 2

export function Part2(input: string) {
  return input
    .split('\n')
    .map((n) => +n)
    .map((_, i, arr) => arr.slice(i, i + 3))
    .filter((v) => v.length === 3)
    .map((v) => v.reduce((a, b) => a + b))
    .filter((v, i, arr) => v > arr[i - 1])
    .length
}
