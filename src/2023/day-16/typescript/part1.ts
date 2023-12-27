type Dir = '>' | '<' | 'V' | '^'

export function Part1(input: string) {
  let grid = input
    .trim()
    .split(/\n/)
    .map((line) => line.split(''))

  return floodPaths(grid, 0, 0, initalDir(grid)).size
}

function initalDir(grid: string[][]): Dir {
  if (grid[0][0] === '\\') return 'V'
  if (grid[0][0] === '|') return 'V'
  if (grid[0][0] === '/') return '^'
  return '>'
}

function floodPaths(grid: string[][], x: number, y: number, dir: Dir): Map<string, Dir[]> {
  let paths = new Map<string, Dir[]>()
  let queue: { hash: string; dir: Dir }[] = [{ hash: key(x, y), dir: dir }]

  while (queue.length > 0) {
    let { hash, dir } = queue.shift()!
    if (!paths.has(hash)) paths.set(hash, [])
    paths.get(hash)!.push(dir)

    let [x, y] = hash.split(',').map(Number)
    let [x1, y1] = step(x, y, dir)
    if (!grid[y1] || !grid[y1][x1]) continue
    hash = key(x1, y1)

    processTile(grid[y1][x1], dir).forEach((dir) => {
      if (!paths.has(hash) || !paths.get(hash)!.includes(dir)) {
        queue.push({ hash: key(x1, y1), dir })
      }
    })
  }

  return paths
}

function processTile(tile: string, dir: Dir): Dir[] {
  switch (tile) {
    case '|':
      return dir === '<' || dir === '>' ? ['^', 'V'] : [dir]
    case '-':
      return dir === '^' || dir === 'V' ? ['<', '>'] : [dir]
    case '/':
      return [dir === '>' ? '^' : dir === '<' ? 'V' : dir === '^' ? '>' : '<']
    case '\\':
      return [dir === '>' ? 'V' : dir === '<' ? '^' : dir === '^' ? '<' : '>']
    default:
      return [dir]
  }
}

function step(x: number, y: number, dir: Dir) {
  switch (dir) {
    case '>':
      return [x + 1, y]
    case '<':
      return [x - 1, y]
    case 'V':
      return [x, y + 1]
    case '^':
      return [x, y - 1]
  }
}

function key(x: number, y: number) {
  return `${x},${y}`
}
