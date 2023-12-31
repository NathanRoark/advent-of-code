use itertools::Itertools;

pub fn part_1(input: &str) -> i32 {
  input
    .trim()
    .split('\n')
    .filter_map(|line| {
      let (label, games) = line.split(": ").collect_tuple().unwrap();
      let game_id = label.split(' ').nth(1).unwrap().parse::<i32>().unwrap_or(0);

      let game_valid = games.split("; ").all(|set| {
        set.split(", ").all(|score| {
          let (v, color) = score.split(' ').collect_tuple().unwrap();
          let v: i32 = v.parse().unwrap();

          match color {
            "red" => v <= 12,
            "green" => v <= 13,
            "blue" => v <= 14,
            _ => false,
          }
        })
      });

      if game_valid {
        Some(game_id)
      } else {
        None
      }
    })
    .sum()
}
