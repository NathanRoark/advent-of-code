// advent of code 2022 day 1 part 1

export function Part1(input: string) {
  return input
    .split(/\n\s*\n/)
    .map((group) => group.split(/\n/).map((line) => +line)
      .reduce((a, b) => a + b))
    .sort((a, b) => b - a)
    .shift();
}
