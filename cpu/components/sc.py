class SequenceCounter:
    def __init__(self, size: int):
        self.size = size
        self.bits: list[int]
        self.clr()

    @property
    def out(self):
        return self.bits

    def clr(self):
        self.bits = [0] * self.size

    def inr(self):
        carry = 1
        for i in range(self.size - 1, -1, -1):
            b = self.bits[i]
            self.bits[i] ^= carry
            carry &= b
