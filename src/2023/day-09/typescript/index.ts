import { readFileSync } from "fs";

import { Part1 } from "./part-1";
import { Part2 } from "./part-2";
function main() {
  const input = readFileSync("./data/input.txt", "utf8");
  const testInput1 = readFileSync("./data/test-input-1.txt", "utf8");
  const test1 = Part1(testInput1);
  const part1 = Part1(input);
  const test2 = Part2(testInput1);
  const part2 = Part2(input)
  console.log("Part 1, Test1:  ", 114 == test1 ? "PASS ✅" : "FAIL ❌", test1);
  console.log("Part 1, Answer: ", 1995001648 == part1 ? "PASS ✅" : "FAIL ❌", part1);
  console.log("Part 2, Test:   ", 2 == test2 ? "PASS ✅" : "FAIL ❌", test2);
  console.log("Part 2, Answer: ", 988 == part2 ? "PASS ✅" : "FAIL ❌", part2);
}
main();