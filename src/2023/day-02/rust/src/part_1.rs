use itertools::Itertools;

pub fn part_1(input: &str) -> i32 {
  input
    .trim()
    .split('\n')
    .map(|line| {
      let (label, games) = line.split(": ").collect_tuple().unwrap();
      games
        .split("; ")
        .map(|set| {
          set
            .split(", ")
            .map(|score| {
              let (v, color) = score.split(' ').collect_tuple().unwrap();
              let v: i32 = v.parse().unwrap();

              match color {
                "red" => v <= 12,
                "green" => v <= 13,
                "blue" => v <= 14,
                _ => panic!("it could be worse"),
              }
            })
            .all(|x| x)
        })
        .all(|x| x)
        .then(|| label.split(' ').nth(1).unwrap().parse::<i32>().unwrap_or(0))
        .unwrap_or(0)
    })
    .sum()
}
