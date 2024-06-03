from cpu.utils.reversed_index_list import ReversedIndexList


class Decoder:
    def __init__(self, in_size=4) -> None:
        self.in_size = in_size
        self.out_size = 2**in_size
        self.bits: ReversedIndexList[int]
        self.clr()

    def clr(self):
        self.bits = ReversedIndexList([0] * self.out_size)

    @property
    def out(self):
        output = ReversedIndexList([0] * self.out_size)
        index = sum([self.bits[i] * (2**i) for i in range(len(self.bits))])
        output[index] = 1
        return output
