// advent of code 2021 day 2 part 1

export function Part1(input: string) {
  const steps = input
    .trim()
    .split('\n')
    .map((line) => line.split(' '))

  let x = 0;
  let y = 0;

  steps.forEach(([dir, dst]) => {
    if (dir == 'forward') {
      x += +dst;
    } else if (dir == 'up') {
      y -= +dst
    } else if (dir == 'down') {
      y += +dst;
    }
  })

  return x * y;
}
