export function Part1(input: string) {
  return input
    .trim()
    .split(/,/)
    .map((step) =>
      step
        .trim()
        .split('')
        .reduce((acc, char) => ((acc + char.charCodeAt(0)) * 17) % 256, 0),
    )
    .reduce((acc, val) => acc + val, 0)
}
