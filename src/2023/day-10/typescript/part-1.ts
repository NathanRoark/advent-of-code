import { Node, addEdge, bfs, validEdge } from "./utils";

export function Part1(input: string) {
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
  const path = bfs(graph, start!)

  // furthest tile is the last element in the BFS
  return [...Array.from(path.values())].pop()
}
