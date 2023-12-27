// advent of code 2022 day 2 part 2

export function Part2(input: string) {
  const data = input.trim().split(/\n/).map((line) => line.split(/\s/));
  return data.map((p) => p[0]).map((p1, index) => {
    const p2 = data.map((p) => p[1])[index];
    if (p2 == 'Z') {
      if (p1 == 'A') return 2 + 6;
      else if (p1 == 'B') return 3 + 6;
      else return 1 + 6;
    } else if (p2 == 'Y') {
      if (p1 == 'A') return 1 + 3;
      else if (p1 == 'B') return 2 + 3;
      else return 3 + 3;
    } else {
      if (p1 == 'A') return 3 + 0;
      else if (p1 == 'B') return 1 + 0;
      else return 2 + 0;
    }
  }).reduce((a, b) => a + b);
}
