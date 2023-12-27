from part_1 import Part1
from part_2 import Part2

input = open("./data/input.txt", "r").read()
test_input = open("./data/test-input.txt", "r").read()

if __name__ == "__main__":
    print("---- Part 1 ----")
    test = Part1(test_input)
    print(f" Test:  {test}")
    final = Part1(input)
    print(f" Final: {final}")
    print("---- Part 2 ----")
    test = Part2(test_input)
    print(f" Test:  {test}")
    final = Part2(input)
    print(f" Final: {final}")
