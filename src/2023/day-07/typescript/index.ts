import { readFileSync } from "fs";

import { Part1 } from "./part-1";
import { Part2 } from "./part-2";
function main() {
  const test = readFileSync("./data/test-input.txt", "utf8");
  const input = readFileSync("./data/input.txt", "utf8");
  console.log("Part 1, Test: ", Part1(test), 6440);
  console.log("Part 1, Answer: ", Part1(input), 251927063);
  console.log("Part 2, Test: ", Part2(test), 5905);
  console.log("Part 2, Answer: ", Part2(input), 255632664);
}
main();
