// advent of code 2023 day 5 part 2

export function Part2(input: string) {
  const { seeds, maps } = parse(input.trim());
  return chunks(seeds, 2).map(([start, len]) => {
    let init = [[start, start + len]];
    return maps.map((map) => init = locate(init, map)).pop()!
      .reduce((a, b) => Math.min(a, b[0]), Infinity);
  }).reduce((a, b) => Math.min(a, b), Infinity);
}

function locate(ranges: number[][], map: number[][]) {
  // I want to find a better way to do this but I'm eepy
  const done: number[][] = []
  map.forEach(([dst, src, len]) => {
    ranges.splice(0).forEach(([start, end]) => {
      if (end < src) { // seed is before map
        ranges.push([start, Math.min(end, src)])
      }
      else if (start > src + len) { // seed is after map
        ranges.push([Math.max(src + len, start), end])
      }
      else if (start <= src && end >= src + len) { // seed covers map
        ranges.push([start, src])
        ranges.push([src + len, end])
        done.push([dst, dst + len])
      }
      else if (start < src && end > src) { // seed covers start of map
        ranges.push([start, src])
        done.push([dst, dst + (end - src)])
      }
      else if (start < src + len && end > src + len) { // seed covers end of map
        ranges.push([src + len, end])
        done.push([dst + (start - src), dst + len])
      }
      else if (start >= src && end <= src + len) { // seed is inside map
        done.push([dst + (start - src), dst + (end - src)])
      }
    })
  });
  return ranges.concat(done)
}

function chunks<T>(array: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
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
