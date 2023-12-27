// advent of code 2023 day 7 part 2

export function Part2(input: string) {
  return input
    .trim()
    .split('\n')
    .map((line) => parse(line))
    .sort(([a], [b]) => type(a) - type(b) || rank(a, b))
    .reduce((acc, [, bid], i, arr) =>
      acc + bid * (arr.length - i), 0)
}

function type(cards: string[]) {
  // count the cards and put them in a map
  const counts = cards.reduce((acc, card) => ({
    ...acc, [card]: (acc[card] ?? 0) + 1
  }), {} as Record<string, number>);

  // if there are any jokers, use them as the highest card
  if (counts['J']) {
    const highest = Object.entries(counts)
      .reduce((high, [card, count]) =>
        card !== 'J' && (!high || counts[high] < count)
          ? card : high,
        null as string | null
      );
    if (highest) {
      counts[highest] += counts['J']
      delete counts['J']
    }
  }

  const handType = Object.values(counts)
    .sort((a, b) => b - a).join('')

  const handTypes: Record<string, number> = {
    '5': 1,     // five of a kind
    '41': 2,    // four of a kind
    '32': 3,    // full house
    '311': 4,   // three of a kind
    '221': 5,   // two pair
    '2111': 6,  // one pair
    '11111': 7  // high card
  };

  return handTypes[handType];
}

// sort function for card ranks
function rank(a: string[], b: string[]) {
  const order = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J']
  for (let i = 0; i < a.length; i++) {
    const aIdx = order.indexOf(a[i])
    const bIdx = order.indexOf(b[i])
    if (aIdx !== bIdx) {
      return aIdx - bIdx
    } // go until we find a different card
  }
  return 0 // same cards
}

// type got too complicated to inline 😒
function parse(input: string): [cards: string[], bid: number] {
  const [cards, bid] = input.split(/\s+/)
  return [cards.split(''), Number(bid)]
}
