use itertools::Itertools;

pub fn part_2(input: &str) -> i32 {
  input
    .trim()
    .split('\n')
    .map(|line| {
      let (_, games) = line.split(": ").collect_tuple().unwrap();
      let mut max = (0, 0, 0); // red, green, blue

      games.split("; ").for_each(|set| {
        set.split(", ").for_each(|score| {
          let (v, color) = score.split(' ').collect_tuple().unwrap();
          let v: i32 = v.parse().unwrap();

          match color {
            "red" => max.0 = max.0.max(v),
            "green" => max.1 = max.1.max(v),
            "blue" => max.2 = max.2.max(v),
            _ => (),
          }
        });
      });

      max.0 * max.1 * max.2
    })
    .sum()
}
