pub fn part_2(input: &str) -> i32 {
  let words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  input
    .trim()
    .lines()
    .map(|ln| {
      ln.trim()
        .chars()
        .enumerate()
        .filter_map(|(i, c)| {
          if c.is_digit(10) {
            c.to_digit(10).map(|d| d as i32)
          } else if c.is_alphabetic() {
            words.iter().position(|&w| ln[i..].starts_with(w)).map(|i| (i + 1) as i32)
          } else {
            None
          }
        })
        .collect::<Vec<i32>>()
    })
    .map(|nums| nums[0] * 10 + nums[nums.len() - 1])
    .sum()
}
