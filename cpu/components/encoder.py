from cpu.utils.reversed_index_list import ReversedIndexList
from math import log2


class Encoder:
    def __init__(self, size=16) -> None:
        self.i = ReversedIndexList([0] * size)
        self.out_size = int(log2(size))
        self.size = size

    @property
    def out(self):
        for j in range(self.size):
            if self.i[j] == 1:
                return ReversedIndexList(j, size=self.out_size)
        return ReversedIndexList(0, size=self.out_size)
