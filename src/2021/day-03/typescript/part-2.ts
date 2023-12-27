// advent of code 2021 day 3 part 2

export function Part2(input: string) {
  const binaries = input.trim().split('\n')
  const numbers = binaries
    .map((line) => parseInt(line.trim(), 2))

  const state = {
    gamma: numbers.slice(),
    epsilon: numbers.slice(),
  }

  const prefer = {
    gamma: 1,
    epsilon: 0,
  }

  for (let i = binaries[0].length - 1; i >= 0; i--) {
    Object.keys(state).forEach((rating) => {
      if (state[rating].length === 1) {
        return // already found the answer
      }

      const mask = 1 << i
      let ones = 0
      let zeros = 0

      for (const number of state[rating]) {
        number & mask ? ones++ : zeros++
      }

      state[rating] = state[rating].filter((n: number) =>
        ones >= zeros != prefer[rating]
          ? n & mask
          : !(n & mask)
      )
    })
  }
  return state.gamma.pop()! * state.epsilon.pop()!
}
