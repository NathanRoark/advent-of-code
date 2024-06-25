
package part2;

use strict;
use warnings;
use Exporter 'import';

our @EXPORT = qw(part2);

# Hash to search in part 2
my %values_to_search = (
  "zero" => 0, "one" => 1,   1 => 1, "two" => 2,   2 => 2, "three" => 3, 3 => 3, "four" => 4,  4 => 4, "five" => 5, 
  5 => 5, "six" => 6,   6 => 6, "seven" => 7, 7 => 7, "eight" => 8, 8 => 8, "nine" => 9,  9 => 9,
);

sub part2 {
    my ($input) = @_;
    my @lines = split /\n/, $input;
    my $sum = 0;

    foreach my $line (@lines) {
        # Initialize variables to detect position of each element in the hash
        my ($max_pos, $max_val, $min_pos, $min_val) = (-1, 0, ~0, 0);

        # Find the occurrences of each key of the map inside the string
        while (my ($key_to_search, $value) = each %values_to_search) {
            my ($left_index, $right_index) = ((index $line, $key_to_search), (rindex $line, $key_to_search));

            # Skip if not found
            next if ($left_index == -1);

            # Possibly update the first element in the string
            if ($left_index < $min_pos) {
                $min_val = $value;
                $min_pos = $left_index;
            }

            # Possibly update the last element in the string
            if ($right_index > $max_pos) {
                $max_val = $value;
                $max_pos = $right_index;
            }
        }

        # Add correct value for part 2 if both min_val and max_val are set
        $sum += ($min_val * 10 + $max_val) if $max_pos >= 0 && $min_pos < ~0;
    }

    return $sum;
}

1;

