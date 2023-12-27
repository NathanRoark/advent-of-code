import { readFileSync } from "fs";

import { Part1 } from "./part-1";
import { Part2 } from "./part-2";

const input = readFileSync("./data/input.txt", "utf8");
const testInput1a = readFileSync("./data/test-input-1a.txt", "utf8");
const testInput1b = readFileSync("./data/test-input-1b.txt", "utf8");
const testInput2a = readFileSync("./data/test-input-2a.txt", "utf8");
const testInput2b = readFileSync("./data/test-input-2b.txt", "utf8");

const test1a = Part1(testInput1a);
const test1b = Part1(testInput1b);
const part1 = Part1(input);
const test2a = Part2(testInput2a);
const test2b = Part2(testInput2b);
const part2 = Part2(input)

console.log("------- Part 1 -------")
console.log("TestA:  ", 4 == test1a ? "PASS ✅" : "FAIL ❌", test1a);
console.log("TestB:  ", 8 == test1b ? "PASS ✅" : "FAIL ❌", test1b);
console.log("Answer: ", 6823 == part1 ? "PASS ✅" : "FAIL ❌", part1);
console.log("------- Part 2 -------")
console.log("TestA:  ", 8 == test2a ? "PASS ✅" : "FAIL ❌", test2a);
console.log("TestB:  ", 10 == test2b ? "PASS ✅" : "FAIL ❌", test2b);
console.log("Answer: ", 415 == part2 ? "PASS ✅" : "FAIL ❌", part2);
