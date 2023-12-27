export function Part2(input: string) {
  const { inst, nodes } = parse(input.trim());
  let steps = 0, total = 1
  let todo = Object.keys(nodes).filter((x) => x.endsWith('A'))
  while (todo.length > 0) {
    let dir = inst[steps % inst.length]
    for (let i = todo.length - 1; i >= 0; --i) {
      const current = todo[i]
      if (current.endsWith('Z')) {
        total = lcm(total, steps)
        todo.splice(i, 1)
      } else {
        todo[i] = nodes[current][dir]
      }
    }
    steps++
  }
  return total
}

function lcm(x: number, y: number) {
  return x === 0 || y === 0
    ? 0 : Math.abs((x * y) / gcd(x, y))
}

function gcd(x: number, y: number) {
  return y === 0 ? x : gcd(y, x % y)
}

function parse(input: string) {
  const [inst, ...nodes] = input.split(/\n\n/);
  return {
    inst: inst.split(''),
    nodes: Object.fromEntries(nodes.map((node) =>
      node.split(/\n/).map((x) => x.split(/\s=\s/))
        .map(([dst, dir]) => {
          const [L, R] = dir.slice(1, -1).split(/,\s/);
          return [dst, { L, R }];
        }))
      .flat()) as Record<string, { L: string, R: string }>
  }
}
