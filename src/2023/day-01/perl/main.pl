#!/usr/bin/perl
use strict;
use warnings;
use lib '.';    # Add current directory to module search path
require part1;  # Import the module with its own namespace
require part2;  # Import the module with its own namespace
# use part1;      # Import the module into the current namespace

# Read the contents of the file into a string
my $input = './data/input.txt';
open(my $fh, '<', $input) or die "Could not open file '$input' $!";
my $file_contents = do { local $/; <$fh> };
close($fh);

# Call the function from Second.pm with the file contents as argument
my $result1 = part1::part1($file_contents);
my $result2 = part2::part2($file_contents);

# Print the result
print "Part 1: $result1\n";
print "Part 2: $result2\n";
