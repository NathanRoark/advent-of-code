import { readFileSync } from "fs";

import { Part1 } from "./part-1";
import { Part2 } from "./part-2";
function main() {
  const test1 = readFileSync("./data/test-input-1.txt", "utf8");
  const test2 = readFileSync("./data/test-input-2.txt", "utf8");
  const input = readFileSync("./data/input.txt", "utf8");
  console.log("Part 1, Test: ", Part1(test1));
  console.log("Part 1, Answer: ", Part1(input));
  console.log("Part 2, Test: ", Part2(test2));
  console.log("Part 2, Answer: ", Part2(input));
}
main();
