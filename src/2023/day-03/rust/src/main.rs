use std::time::Instant;
mod part_1;
mod part_2;

fn main() {
  // input
  const INPUT: &str = include_str!("../data/input.txt");
  const TEST_INPUT: &str = include_str!("../data/test-input.txt");

  println!("================== Day 03 ==================");

  // part 1
  println!("------------------ Part 1 ------------------");
  let start = Instant::now();
  let result = part_1::part_1(TEST_INPUT);
  let duration = start.elapsed();
  println!("Test:   {}", check_result(result, 4361, duration));

  let start = Instant::now();
  let result = part_1::part_1(INPUT);
  let duration = start.elapsed();
  println!("Answer: {}", check_result(result, 528799, duration));

  // part 2
  println!("------------------ Part 2 ------------------");
  let start = Instant::now();
  let result = part_2::part_2(TEST_INPUT);
  let duration = start.elapsed();
  println!("Test:   {}", check_result(result, 467835, duration));

  let start = Instant::now();
  let result = part_2::part_2(INPUT);
  let duration = start.elapsed();
  println!("Answer: {}", check_result(result, 84907174, duration));
}

fn check_result<T: std::fmt::Display + std::cmp::PartialEq>(result: T, expected: T, duration: std::time::Duration) -> String {
  if result == expected {
    format!("{:8}, pass ✅, time: {:?}", result, duration)
  } else {
    format!("{:8}, fail ❌, expected {}", result, expected)
  }
}
