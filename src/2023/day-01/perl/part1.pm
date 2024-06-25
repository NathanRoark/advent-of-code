package part1;

use strict;
use warnings;
use Exporter 'import';

our @EXPORT = qw(part1);

sub part1 {
   my ($input) = @_;
    my @lines = split /\n/, $input;
    my $sum = 0;

    foreach my $l (@lines) {
      $sum += (($l =~ /(\d)/g)[0] * 10 + ($l =~ /(\d)/g)[-1]);
    }

    return $sum;
}

1;
