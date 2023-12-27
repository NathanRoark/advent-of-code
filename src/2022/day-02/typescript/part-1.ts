// advent of code 2022 day 2 part 1

export function Part1(input: string) {
  const data = input.trim().split(/\n/).map((line) => line.split(/\s/));
  return data.map((p) => p[0]).map((p1, index) => {
    const p2 = data.map((p) => p[1])[index];
    if (p2 == 'Z') {
      if (p1 == 'A') return 0 + 3;
      else if (p1 == 'B') return 6 + 3;
      else return 3 + 3;
    } else if (p2 == 'Y') {
      if (p1 == 'A') return 6 + 2;
      else if (p1 == 'B') return 3 + 2;
      else return 0 + 2;
    } else {
      if (p1 == 'A') return 3 + 1;
      else if (p1 == 'B') return 0 + 1;
      else return 6 + 1;
    }
  }).reduce((a, b) => a + b);
}
