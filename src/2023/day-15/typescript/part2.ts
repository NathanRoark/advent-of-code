export function Part2(input: string) {
  let steps = input
    .trim()
    .split(/,/)
    .map((step) => parseStep(step.trim()))

  let boxes = new Map<number, { label: string; focal: number }[]>()

  for (let { box, lens, type } of steps) {
    if (!boxes.has(box)) boxes.set(box, [])
    let lenses = boxes.get(box)!
    let index = lenses.findIndex((idx) => idx.label === lens.label)

    if (type === '=') {
      index >= 0 ? (lenses[index] = lens) : lenses.push(lens)
    } else if (index >= 0) {
      lenses.splice(index, 1)
    }
  }

  return Array.from(boxes.entries())
    .flatMap(([box, lenses]) => lenses.map((lens, idx) => (box + 1) * (idx + 1) * lens.focal))
    .reduce((acc, val) => acc + val, 0)
}

function parseStep(step: string) {
  return step.includes('=')
    ? (([label, value]) => ({
        type: '=',
        box: hash(label),
        label,
        lens: { label, focal: Number(value) },
      }))(step.split('='))
    : {
        type: '-',
        box: hash(step.slice(0, -1)),
        label: step.slice(0, -1),
        lens: { label: step.slice(0, -1), focal: 0 },
      }
}

function hash(input: string) {
  return input
    .trim()
    .split('')
    .reduce((acc, char) => ((acc + char.charCodeAt(0)) * 17) % 256, 0)
}
