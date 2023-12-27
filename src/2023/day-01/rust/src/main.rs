use std::time::Instant;
mod part_1;
mod part_2;

fn main() {
  // input
  const INPUT: &str = include_str!("../data/input.txt");
  const TEST_INPUT_1: &str = include_str!("../data/test-input-1.txt");
  const TEST_INPUT_2: &str = include_str!("../data/test-input-2.txt");

  println!("================== Day 01 ==================");

  // part 1
  println!("------------------ Part 1 ------------------");
  let start = Instant::now();
  let result = part_1::part_1(TEST_INPUT_1);
  let duration = start.elapsed();
  println!("Test:   {}", check_result(result, 142, duration));

  let start = Instant::now();
  let result = part_1::part_1(INPUT);
  let duration = start.elapsed();
  println!("Answer: {}", check_result(result, 54667, duration));

  // part 2
  println!("------------------ Part 2 ------------------");
  let start = Instant::now();
  let result = part_2::part_2(TEST_INPUT_2);
  let duration = start.elapsed();
  println!("Test:   {}", check_result(result, 281, duration));

  let start = Instant::now();
  let result = part_2::part_2(INPUT);
  let duration = start.elapsed();
  println!("Answer: {}", check_result(result, 54203, duration));
}

fn check_result<T: std::fmt::Display + std::cmp::PartialEq>(result: T, expected: T, duration: std::time::Duration) -> String {
  if result == expected {
    format!("{:8}, pass ✅, time: {:?}", result, duration)
  } else {
    format!("{:8}, fail ❌, expected {}", result, expected)
  }
}
