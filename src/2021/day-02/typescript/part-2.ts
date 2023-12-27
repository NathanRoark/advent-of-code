// advent of code 2021 day 2 part 2

export function Part2(input: string) {
  const steps = input
    .trim()
    .split('\n')
    .map((line) => line.split(' '))

  let x = 0;
  let y = 0;
  let aim = 0;

  steps.forEach(([dir, dst]) => {
    if (dir == 'forward') {
      x += +dst;
      y += aim * +dst;
    } else if (dir == 'up') {
      aim -= +dst
    } else if (dir == 'down') {
      aim += +dst;
    }
  })

  return x * y;
}
