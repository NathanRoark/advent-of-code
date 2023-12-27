import { MinHeap } from './utils'

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
] // Right, Down, Left, Up

function key(x: number, y: number, z: number) {
  return `${x},${y},${z}`
}

export function Part2(input: string) {
  const grid = input
    .trim()
    .split(/\n/)
    .map((ln) => ln.split('').map((n) => Number(n)))

  const start = { x: 0, y: 0 }
  const end = { x: grid[0].length - 1, y: grid.length - 1 }
  const heap = new MinHeap<[number, number, number, number]>((a, b) => a[0] - b[0])
  const lowestVal = new Map<string, number>() // lowest heat loss value found for each tile

  heap.add([0, start.x, start.y, -1])

  while (!heap.isEmpty()) {
    const [val, x, y, ld] = heap.remove()!
    if (x === end.x && y === end.y) return val

    directions.forEach(([dx, dy], d) => {
      if (d === ld || (d + 2) % 4 === ld) return
      let heatInc = 0

      for (let distance = 1; distance <= 10; distance++) {
        const nx = x + dx * distance
        const ny = y + dy * distance

        if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length) {
          heatInc += grid[nx][ny]
          if (distance < 4) continue

          const nc = val + heatInc

          if (lowestVal.get(key(nx, ny, d))! <= nc) continue

          lowestVal.set(key(nx, ny, d), nc)
          heap.add([nc, nx, ny, d])
        }
      }
    })
  }
}
