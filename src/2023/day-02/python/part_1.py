max_cubes = {"red": 12, "green": 13, "blue": 14}


def Part1(input):
    data = tuple(ln.strip() for ln in input.strip().split("\n"))
    s = 0
    for line in data:
        pos = True
        cubes = {"red": 0, "green": 0, "blue": 0}
        rest = line.split(":")
        gid = int(rest.pop(0)[5:])
        for g in [g.split(",") for g in rest[0].split(";")]:
            for v, k in [c.split() for c in g]:
                if max_cubes[k] < int(v):
                    pos = False
                cubes[k] = max(cubes[k], int(v))
        s += gid if pos else 0
    return s
