// advent of code 2023 day 3 part 1

export function Part2(input: string) {
  const games = input.trim().split("\n").map(line => {
    const [a, b] = line.split(": ")[1].split(" | ").map(x => new Set(x.match(/\d+/g)));
    return [...a].filter(n => b.has(n)).length;
  });

  const cards = new Array(games.length).fill(1);
  games.forEach((wins, i) => {
    for (let n = 0; n < cards[i]; n++) {
      for (let j = i + 1; j < i + 1 + wins; j++) {
        cards[j] += 1;
      }
    }
  })
  return cards.reduce((a, b) => a + b);
}
