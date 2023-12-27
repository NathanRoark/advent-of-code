// advent of code 2023 day 3 part 1


export function Part1(input: string) {
  return input
    .trim()
    .split("\n")
    .map((line) => {
      const [a, b] = line.split(": ")[1].split(" | ").map(x => new Set(x.match(/\d+/g)));
      const wins = [...a].filter(n => b.has(n)).length;
      return wins > 0 ? Math.pow(2, wins - 1) : 0;
    }).reduce((a, b) => a + b);
}

