export function Part2(input: string) {
  return input
    .trim()
    .split("\n")
    .map((line) => {
      const [_, game] = line.split(": ");
      const max = { r: 0, g: 0, b: 0 }
      game.split("; ").map((set) =>
        set.split(", ").map((score) => {
          const [v, c] = score.split(" ")
          if (c === "red" && +v > max.r) max.r = +v
          else if (c === "green" && +v > max.g) max.g = +v
          else if (c === "blue" && +v > max.b) max.b = +v
        })
      )
      return max.r * max.g * max.b;
    }).reduce((a, b) => a + b);
}
