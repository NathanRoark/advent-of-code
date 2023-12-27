export function Solve(input: string, expansion = 1) {
  const expan = expansion - 1; // expansion is 1-based, but we need 0-based
  const starMap: { x: number, y: number }[] = input
    .trim().split('\n')
    .map((line) => line)
    .flatMap((line, y) => line.trim().split('')
      .flatMap((star, x) => star === '#' ? { x: x, y: y } : null))
    .filter(star => star !== null) as { x: number, y: number }[];

  const w = Math.max(...starMap.map(star => star.x));
  const h = Math.max(...starMap.map(star => star.y));

  // expand star map columns
  let c = 0;
  for (let x = 1; x <= w + c; x++) {
    if (!starMap.some(star => star.x === x)) {
      starMap.forEach(star => {
        if (star.x > x) star.x += expan;
      })
      x += 1 * expan; // skip the newly added column
      c += 1 * expan;
    }
  }

  // expand star map rows
  c = 0;
  for (let y = 1; y <= h + c; y++) {
    if (!starMap.some(star => star.y === y)) {
      starMap.forEach(star => {
        if (star.y > y) star.y += expan;
      })
      y += 1 * expan; // skip the newly added row
      c += 1 * expan;
    }
  }

  // Create unique pairs of stars
  let pairs = starMap
    .flatMap((star, i) => starMap.slice(i + 1)
      .map(other => [star, other]));

  // accumulate the manhattan distance between each pair
  return pairs
    .map(([a, b]) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y))
    .reduce((sum, d) => sum + d, 0);
}
