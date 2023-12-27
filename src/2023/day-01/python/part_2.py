import re

words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]


# Word to number helper function
def w2n(value: str) -> int:
    if value.isnumeric():
        return int(value)
    return words.index(value) + 1


def Part2(input_str):
    lines = input_str.strip().split("\n")
    # Pattern to match a number word
    pattern = "one|two|three|four|five|six|seven|eight|nine"
    # Reverse the pattern so that we can search backwards from end
    reverse_pattern = pattern[::-1]
    total = 0
    for line in [ln.strip() for ln in lines]:
        # Find the first digit
        first = re.search(rf"(\d|{pattern})", line)
        # Find the last digit by searching for reversed pattern
        # on the reversed string
        last = re.search(rf"(\d|{reverse_pattern})", line[::-1])
        # Update running total
        total += w2n(first.group()) * 10 + w2n(last.group()[::-1])
    return total
