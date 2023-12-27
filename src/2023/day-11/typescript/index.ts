import { readFileSync } from "fs";

import { Solve } from "./solve";

const input = readFileSync("./data/input.txt", "utf8");
const testInput1a = readFileSync("./data/test-input-1a.txt", "utf8");
//
// test using max demaio's input
// we found a case in his input that my solution failed
// it is now fixed, but I want to keep the test case around
// https://github.com/maxdemaio
const inputMax = readFileSync("./data/input-max.txt", "utf8"); // friend's input

// run tests and answers
const test1a = Solve(testInput1a, 2);
const test1b = Solve(inputMax, 2);
const part1 = Solve(input, 2);
const test2a = Solve(testInput1a, 10);
const test2b = Solve(testInput1a, 100);
const part2 = Solve(input, 1_000_000);
const test2c = Solve(inputMax, 1_000_000); // max's test case

console.log("------- part 1 -------")
console.log("testa:  ", 374 == test1a ? "pass ✅" : "fail ❌", test1a);
console.log("testb:  ", 9545480 == test1b ? "pass ✅" : "fail ❌", test1b);
console.log("answer: ", 9543156 == part1 ? "pass ✅" : "fail ❌", part1);
console.log("------- part 2 -------")
console.log("testa:  ", 1030 == test2a ? "pass ✅" : "fail ❌", test2a);
console.log("testb:  ", 8410 == test2b ? "pass ✅" : "fail ❌", test2b);
console.log("testc:  ", 406725732046 == test2c ? "pass ✅" : "fail ❌", test2c);
console.log("answer: ", 625243292686 == part2 ? "pass ✅" : "fail ❌", part2);
