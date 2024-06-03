from math import ceil, log2
from cpu.utils.reversed_index_list import ReversedIndexList


class Mux:
    def __init__(self, size: int) -> None:
        self.pins = ceil(log2(size))
        self.size = size
        self.s = ReversedIndexList([0] * self.pins)
        self.i = ReversedIndexList([0] * self.size)

    @property
    def out(self):
        index = sum([self.s[i] * (2**i) for i in range(self.pins)])
        return self.i[index]
