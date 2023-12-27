pub fn part_1(input: &str) -> i32 {
  input
    .trim()
    .lines()
    .map(|ln| ln.trim().chars().filter_map(|c| c.to_digit(10)).collect::<Vec<u32>>())
    .map(|digits| {
      let first = digits.first().unwrap();
      let last = digits.last().unwrap();
      (*first as i32) * 10 + (*last as i32)
    })
    .sum()
}
