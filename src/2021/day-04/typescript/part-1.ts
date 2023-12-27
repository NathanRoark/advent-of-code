export function Part1(input: string) {
  const data = input.trim().split(/\n\n/)
  const numbers = data.shift()!.split(/,/).map(Number)
  const boards = data.map(b =>
    b
      .trim()
      .split(/\n/)
      .map(ln =>
        ln
          .trim()
          .split(/\s+/)
          .map(n => ({ mark: false, num: Number(n) }))
      )
  )

  for (let num of numbers) {
    for (let board of boards) {
      board.forEach((row, rowIdx) => {
        board[rowIdx] = row.map(n => (n.num === num ? { mark: true, num: n.num } : n))
      })
      if (bingo(board)) {
        return (
          num *
          board
            .flat()
            .filter(n => !n.mark) // sum of all unmarked numbers
            .reduce((a, b) => a + b.num, 0)
        )
      }
    }
  }

  return Error('No bingo found')
}

function bingo(board: { mark: boolean; num: number }[][]) {
  for (let row of board) {
    if (row.every(n => n.mark)) return true
  }
  for (let row of transpose(board)) {
    if (row.every(n => n.mark)) return true
  }
  return false
}

function transpose<T>(grid: T[][]) {
  return grid[0].map((_, i) => grid.map(row => ({ ...row[i] })))
}
