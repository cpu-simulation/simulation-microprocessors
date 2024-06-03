from math import ceil, log2
from cpu.utils.binary import bin_list_value


class Mux:
    def __init__(self, size: int) -> None:
        self.pins = ceil(log2(size))
        self.size = size
        self.s = [0] * self.pins
        self.i = [0] * self.size

    @property
    def out(self):
        index = bin_list_value(self.s)
        return self.i[index]
