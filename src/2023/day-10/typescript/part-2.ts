import { Node, addEdge, bfs, toKey, validEdge } from "./utils";

export function Part2(input: string) {
  const data = input.split('\n').map(line => line.trim());
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let graph = new Map<string, string[]>();
  let start: Node | null = null;

  // Build the graph
  data.forEach((line, y) =>
    line.split('').forEach((c, x) => {
      if (c === 'S') start = [x, y]
      for (let [i, j] of directions) {
        if (validEdge(data, x, y, x + i, y + j)) {
          addEdge(graph, [x, y], [x + i, y + j])
        }
      }
    })
  )

  // Find longest path
  let paths = bfs(graph, start!);

  let enclosed = 0; // number of enclosed loops
  data.forEach((line, y) =>
    line.split('').forEach((_, x) => {
      let nodeKey = toKey(x, y);
      if (paths.has(nodeKey)) return; // skip if node is on the path
      let cross = 0; // number of times the loop is crossed
      let dx = x, dy = y;
      while (dx < data[0].length && dy < data.length) {
        let ignore = "L7".includes(data[dy][dx])
        if (paths.has(toKey(dx, dy)) && !ignore)
          cross += 1; // loop is crossed
        dx += 1;
        dy += 1;
      }
      // if path is crossed an odd number of times, tile is enclosed
      if (cross % 2 === 1) enclosed += 1;
    })
  )

  return enclosed;
}
