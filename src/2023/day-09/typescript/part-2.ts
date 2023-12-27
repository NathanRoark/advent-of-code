export function Part2(input: string) {
  return input.trim().split("\n")
    .map((line) => line.split(" ")
      .map((x) => parseInt(x)))
    .map((nodes) => firstValue(nodes))
    .reduce((a, b) => a + b);
}

function firstValue(nodes: number[]): number {
  // array of sequences of differences between nodes
  let seq: number[][] = [nodes];

  // generate sequence of differences until all zero nodes
  while (!seq[seq.length - 1].every(v => v === 0)) {
    const newSeq = seq[seq.length - 1]
      .map((v, i, arr) => arr[i + 1] - v)
      .slice(0, -1);
    seq.push(newSeq);
  }

  // backtrack to extrapolate a first node
  for (let i = seq.length - 2; i >= 0; --i) {
    const a = seq[i][0];
    const b = seq[i + 1][0];
    seq[i].unshift(a - b);
  }

  return seq[0][0];
}
