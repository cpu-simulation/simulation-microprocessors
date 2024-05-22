import math
from utils.reversed_index_list import ReversedIndexList


class Mux:
    def __init__(self, size: int) -> None:
        self.pins = int(math.log2(size))
        self.size = size
        self.s = ReversedIndexList([0] * self.pins)
        self.i = ReversedIndexList([0] * self.size)

    @property
    def out(self):
        v = 0
        for i in range(self.pins):
            v += self.s[i] * (2**i)
        return self.i[v]
