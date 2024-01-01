use std::collections::{HashMap, HashSet};

pub fn part_2(input: &str) -> u32 {
  let engine: Vec<Vec<char>> = input.lines().map(|line| line.trim().chars().collect()).collect();

  let mut stars: HashMap<(i32, i32), Vec<u32>> = HashMap::new();
  let mut current_num = 0;
  let mut adjacent_star_positions: HashSet<(i32, i32)> = HashSet::new();

  for (row_idx, row) in engine.iter().enumerate() {
    for (col_idx, &value) in row.iter().enumerate() {
      if value.is_ascii_digit() {
        current_num = current_num * 10 + value.to_digit(10).unwrap();
        process_adjacent_stars(&engine, row_idx, col_idx, &mut adjacent_star_positions);

        if col_idx + 1 >= row.len() || !row.get(col_idx + 1).unwrap().is_ascii_digit() {
          for point in &adjacent_star_positions {
            stars.entry(*point).or_default().push(current_num);
          }
          current_num = 0;
          adjacent_star_positions.clear();
        }
      }
    }
  }

  stars
    .values()
    .filter(|numbers| numbers.len() == 2)
    .map(|numbers| numbers[0] * numbers[1])
    .sum()
}

fn process_adjacent_stars(engine: &[Vec<char>], row_idx: usize, col_idx: usize, stars: &mut HashSet<(i32, i32)>) {
  for row_offset in -1..=1 {
    for col_offset in -1..=1 {
      if row_offset == 0 && col_offset == 0 {
        continue;
      }

      if let Some(adjacent_row) = engine.get((row_idx as i32 + row_offset) as usize) {
        if let Some(&adjacent_value) = adjacent_row.get((col_idx as i32 + col_offset) as usize) {
          if adjacent_value == '*' {
            stars.insert(((row_idx as i32 + row_offset), (col_idx as i32 + col_offset)));
          }
        }
      }
    }
  }
}
