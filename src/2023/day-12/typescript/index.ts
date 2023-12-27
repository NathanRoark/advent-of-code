import { readFileSync } from "fs";

import { Part1 } from "./part1";
import { Part2 } from "./part2";

const input = readFileSync("./data/input.txt", "utf8");
const testInput = readFileSync("./data/test-input.txt", "utf8");

const test1 = Part1(testInput);
const part1 = Part1(input);
const test2 = Part2(testInput);
const part2 = Part2(input);

console.log("------- part 1 -------");
console.log("test:  ", 21 == test1 ? "pass ✅" : "fail ❌", test1);
console.log("answer:", 7173 == part1 ? "pass ✅" : "fail ❌", part1);
console.log("------- part 2 -------");
console.log("test:  ", 525152 == test2 ? "pass ✅" : "fail ❌", test2);
console.log("answer:", 29826669191291 == part2 ? "pass ✅" : "fail ❌", part2);
