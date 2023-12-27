export function Part1(input: string) {
  const { inst, nodes } = parse(input.trim());
  let current = 'AAA', steps = 0;
  while (current !== 'ZZZ') {
    const dir = inst[steps % inst.length];
    current = nodes[current][dir];
    steps++;
  }
  return steps;
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
