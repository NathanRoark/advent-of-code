from functools import reduce

cube_num = {"red": 12, "green": 13, "blue": 14}

def Part2(input):
    data = tuple(ln.strip() for ln in input.strip().split("\n"))
    m = 0
    for line in data:
        min_cube = {"red": 0, "green": 0, "blue": 0}
        rest = line.split(":")
        rest.pop(0)[5:]
        for g in [g.split(",") for g in rest[0].split(";")]:
            for v, k in [c.split() for c in g]:
                min_cube[k] = max(min_cube[k], int(v))
        m += reduce(lambda x, y: x * y, min_cube.values())
    return m
