// advent of code 2023 day 6 part 1

export function Part1(input: string) {
  const [time, win] = input.trim().split('\n')
    .map(s => s.match(/\d+/g)!);
  return time.map((t, i) => [...Array(+t)]
    .filter((_, a) => a * (+t - a) > +win[i]).length
  ).reduce((a, b) => a * b)
}
