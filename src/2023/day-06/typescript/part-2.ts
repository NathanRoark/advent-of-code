// advent of code 2023 day 6 part 2

export function Part2(input: string) {
  const [t, w] = input.trim().split('\n')
    .map(s => +s.match(/\d+/g)!.join(''));
  return [...Array(t)]
    .filter((_, a) => a * (t - a) > w).length
}
