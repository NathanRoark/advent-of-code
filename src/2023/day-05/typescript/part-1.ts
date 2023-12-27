// advent of code 2023 day 5 part 1

export function Part1(input: string) {
  const { seeds, maps } = parse(input);
  return seeds
    .map((x) => maps.map((map) => x = locate(x, map)).pop()!)
    .reduce((a, b) => Math.min(a, b), Infinity)
}

function locate(x: number, map: number[][]): number {
  return map.reduce((acc, [dst, src, len]) =>
    x >= src && x < src + len ? dst + (x - src) : acc, x);
}

function parse(input: string) {
  const [seeds, ...maps] = input.split("\n\n");
  return {
    seeds: seeds.replace('seeds: ', '')
      .split(/\s+/g).map(Number),
    maps: maps.map((map) => map
      .split('\n').slice(1)
      .map((line) => line.split(/\s+/g).map(Number)))
  }
}
