export type Node = [number, number];

export function toKey(x: number, y: number) {
  return `${x},${y}`;
}

export function addEdge(graph: Map<string, string[]>, u: Node, v: Node) {
  let uKey = toKey(u[0], u[1]);
  let vKey = toKey(v[0], v[1]);

  if (!graph.has(uKey)) graph.set(uKey, []);
  graph.get(uKey)!.push(vKey);

  if (!graph.has(vKey)) graph.set(vKey, []);
  graph.get(vKey)!.push(uKey);
}

export function bfs(graph: Map<string, string[]>, start: Node): Map<string, number> {
  let visited = new Map<string, number>([[toKey(start[0], start[1]), 0]]);
  let queue: string[] = [toKey(start[0], start[1])];

  while (queue.length > 0) {
    let node = queue.shift()!;
    let neighbors = graph.get(node) || [];
    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, visited.get(node)! + 1);
        queue.push(neighbor);
      }
    })
  }

  return visited;
}

export function validEdge(data: string[], sx: number, sy: number, dx: number, dy: number) {
  const w = data[0].length;
  const h = data.length;
  if (dy < 0 || dy >= h || dx < 0 || dx >= w) return false;

  const s = data[sy][sx];
  const d = data[dy][dx];

  if (sy === dy) { // Horizontal
    if (sx === dx - 1 && '-LFS'.includes(s) && '-J7S'.includes(d))
      return true; // left to right
    if (sx === dx + 1 && '-J7S'.includes(s) && '-LFS'.includes(d))
      return true; // right to left
  }

  if (sx === dx) { // Vertical
    if (sy === dy - 1 && '|7FS'.includes(s) && '|LJS'.includes(d))
      return true; // top to bottom
    if (sy === dy + 1 && '|LJS'.includes(s) && '|7FS'.includes(d))
      return true; // bottom to top
  }

  return false;
}


