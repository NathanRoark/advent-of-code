import { readFileSync } from "fs";

import { Part1 } from "./part-1";
import { Part2 } from "./part-2";
function main() {
  const test = readFileSync("./data/test-input.txt", "utf8");
  const input = readFileSync("./data/input.txt", "utf8");
  console.log("Part 1, Test: ", Part1(test));
  console.log("Part 1, Answer: ", Part1(input));
  console.log("Part 2, Test: ", Part2(test));
  console.log("Part 2, Answer: ", Part2(input));
}
main();
