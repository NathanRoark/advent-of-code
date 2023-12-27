export function Part1(input: string) {
  return input.trim().split("\n")
    .map((line) => line.split(" ")
      .map((x) => parseInt(x)))
    .map((nodes) => nextValue(nodes))
    .reduce((a, b) => a + b);
}

function nextValue(nodes: number[]): number {
  // array of sequences of differences between nodes
  let seq: number[][] = [nodes];

  // generate sequence of differences until all zero nodes
  while (!seq[seq.length - 1].every(v => v === 0)) {
    const newSeq = seq[seq.length - 1]
      .map((v, i, arr) => arr[i + 1] - v)
      .slice(0, -1);
    seq.push(newSeq);
  }

  // backtrack to extrapolate the next node
  for (let i = seq.length - 2; i >= 0; --i) {
    const a = seq[i][seq[i].length - 1]
    const b = seq[i + 1][seq[i + 1].length - 1]
    seq[i].push(a + b);
  }

  return seq[0][seq[0].length - 1];
}
