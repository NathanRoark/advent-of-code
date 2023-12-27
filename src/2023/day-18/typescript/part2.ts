export function Part2(input: string): number {
  const dirs = { 0: 'R', 1: 'D', 2: 'L', 3: 'U' }
  const delta = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] }
  const instructions = input
    .trim()
    .split(/\n/)
    .map((ln) => {
      let hex = ln.split(' ')[2].slice(2, -1)
      return {
        dir: dirs[hex.slice(-1)],
        dist: parseInt(hex.slice(0, -1), 16),
      }
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
