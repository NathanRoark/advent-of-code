import { readFileSync } from 'fs'
import { performance } from 'perf_hooks';

import { Part1 } from './part1'
import { Part2 } from './part2'

function main() {
  // Input
  const INPUT = readFileSync('./data/input.txt', 'utf8')
  const TEST_INPUT = readFileSync('./data/test-input.txt', 'utf8')

  console.log('=================== Day 01 ===================');

  // Part 1
  console.log('------------------- Part 1 -------------------');
  let start = performance.now();
  let result = Part1(TEST_INPUT);
  let duration = performance.now() - start;
  console.log(`Test:   ${checkResult(result, 62, duration)}`);

  start = performance.now();
  result = Part1(INPUT);
  duration = performance.now() - start;
  console.log(`Answer: ${checkResult(result, 48400, duration)}`);

  // Part 2
  console.log('------------------- Part 2 -------------------');
  start = performance.now();
  result = Part2(TEST_INPUT);
  duration = performance.now() - start;
  console.log(`Test:   ${checkResult(result, 952408144115, duration)}`);

  start = performance.now();
  result = Part2(INPUT);
  duration = performance.now() - start;
  console.log(`Answer: ${checkResult(result, 72811019847283, duration)}`);
}


function checkResult<T extends number | string>(result: T, expected: T, duration: number): string {
  if (result === expected) {
    return `${result.toString().padStart(14)}, pass ✅, time: ${duration.toFixed(2)}ms`;
  } else {
    return `${result.toString().padStart(14)}, fail ❌, expected ${expected}`;
  }
}


main(); 
