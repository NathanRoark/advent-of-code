export function Part1(input: string): number {
  const delta = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] }
  const instructions = input
    .trim()
    .split(/\n/)
    .map((ln) => {
      const [dir, dist, _] = ln.split(' ')
      return { dir: dir, dist: parseInt(dist) }
    })
  // shoelace formula w/ edge
  let x = 0
  let y = 0
  let area = 0
  let totalDistance = 0
  instructions.forEach(({ dir, dist }) => {
    const [dx, dy] = delta[dir]
    const nx = x + dx * dist
    const ny = y + dy * dist
    area += x * ny - y * nx
    totalDistance += dist
    x = nx
    y = ny
  })
  return Math.abs(area) / 2 + totalDistance / 2 + 1
}
