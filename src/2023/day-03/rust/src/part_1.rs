pub fn part_1(input: &str) -> u32 {
  let grid: Vec<Vec<char>> = input.lines().map(|line| line.trim().chars().collect()).collect();

  let mut sum = 0;
  let mut current_num = 0;
  let mut has_adjacent_symbol = false;

  for (row_idx, row) in grid.iter().enumerate() {
    for (col_idx, &value) in row.iter().enumerate() {
      if !value.is_ascii_digit() {
        continue;
      }

      for row_offset in -1..=1 {
        for col_offset in -1..=1 {
          if row_offset == 0 && col_offset == 0 {
            continue;
          }

          if let Some(adjacent_row) = grid.get((row_idx as i32 + row_offset) as usize) {
            if let Some(&adjacent_value) = adjacent_row.get((col_idx as i32 + col_offset) as usize) {
              if !adjacent_value.is_ascii_digit() && adjacent_value != '.' {
                has_adjacent_symbol = true;
              }
            }
          }
        }
      }

      current_num = current_num * 10 + value.to_digit(10).unwrap();

      if col_idx + 1 >= row.len() || !row.get(col_idx + 1).unwrap().is_ascii_digit() {
        if has_adjacent_symbol {
          sum += current_num;
        }
        current_num = 0;
        has_adjacent_symbol = false;
      }
    }
  }

  sum
}
