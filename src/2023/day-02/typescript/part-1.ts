export function Part1(input: string) {
  return input
    .trim()
    .split("\n")
    .map((line) => {
      const [label, game] = line.split(": ");
      return game.split("; ").map((set) => {
        return set.split(", ").map((score) => {
          const [v, c] = score.split(" ");
          if (c === "red") return +v <= 12
          else if (c === "green") return +v <= 13
          else if (c === "blue") return +v <= 14
          return false
        })
      }).every((x) => x.every((y) => y)) ? +label.split(" ")[1] : 0
    }).reduce((a, b) => a + b);
}
