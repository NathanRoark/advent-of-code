import { readFileSync } from 'fs'

import { Part1 } from './part-1'
import { Part2 } from './part-2'

const test = readFileSync('./data/test-input.txt', 'utf8')
const input = readFileSync('./data/input.txt', 'utf8')

const test1a = Part1(test)
const part1 = Part1(input)
const test2a = Part2(test)
const part2 = Part2(input)

console.log('------- part 1 -------')
console.log('testa:  ', 4512 == test1a ? 'pass ✅' : 'fail ❌', test1a)
console.log('answer: ', 39984 == part1 ? 'pass ✅' : 'fail ❌', part1)
console.log('------- part 2 -------')
console.log('testa:  ', 1924 == test2a ? 'pass ✅' : 'fail ❌', test2a)
console.log('answer: ', 8468 == part2 ? 'pass ✅' : 'fail ❌', part2)
