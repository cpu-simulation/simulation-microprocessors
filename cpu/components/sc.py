from cpu.utils.reversed_index_list import ReversedIndexList


class SequenceCounter:
    def __init__(self, size: int):
        self.size = size
        self.bits: ReversedIndexList[int]
        self.clr()

    @property
    def out(self):
        return self.bits

    def clr(self):
        self.bits = ReversedIndexList([0] * self.size)

    def inr(self):
        carry = 1
        for i in range(self.size):
            b = self.bits[i]
            self.bits[i] ^= carry
            carry &= b
