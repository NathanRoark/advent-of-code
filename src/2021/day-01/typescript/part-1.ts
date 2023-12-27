// advent of code 2021 day 1 part 1

export function Part1(input: string) {
  return input
    .split('\n')
    .map((n) => +n)
    .filter((v, i, arr) => v > arr[i - 1])
    .length
}
