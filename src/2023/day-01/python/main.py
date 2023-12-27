from part_1 import Part1
from part_2 import Part2

input = open('./data/input.txt', 'r', encoding='utf-8').read()
test_input_1 = open('./data/test-input-1.txt', 'r', encoding='utf-8').read()
test_input_2 = open('./data/test-input-2.txt', 'r', encoding='utf-8').read()

if __name__ == "__main__":
    print("---- Part 1 ----")
    test = Part1(test_input_1)
    print(f" Test:  {test}")
    final = Part1(input)
    print(f" Final: {final}")
    print("---- Part 2 ----")
    test = Part2(test_input_2)
    print(f" Test:  {test}")
    final = Part2(input)
    print(f" Final: {final}")
