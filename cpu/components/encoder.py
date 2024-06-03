from math import log2, ceil
from cpu.utils.binary import dec_to_binlist


class Encoder:
    def __init__(self, size=16) -> None:
        self.i = [0] * size
        self.out_size = ceil(log2(size))
        self.size = size

    @property
    def out(self):
        for j in range(self.size):
            if self.i[j] == 1:
                return dec_to_binlist(self.size - j, self.out_size)
        return [0] * self.out_size
