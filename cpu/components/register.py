from cpu.utils.reversed_index_list import ReversedIndexList


class Register:
    def __init__(self, size: int, bus):
        self.size = size
        self.bus = bus
        self.bits: ReversedIndexList[int]
        self.clr()

    def clr(self):
        self.bits = [0] * self.size

    def load(self):
        for i in range(self.size):
            self.bits[i] = self.bus.out[i]

    def inr(self):
        carry = 1
        for i in range(self.size):
            b = self.bits[i]
            self.bits[i] ^= carry
            carry &= b

    def write(self, data: list[int]):
        # Explicit writing on register
        reversed_data = ReversedIndexList(data)
        data_length = len(reversed_data)
        if self.size < data_length:
            raise OverflowError

        self.bits = reversed_data

    def read(self):
        # Explicit reading from register
        return self.bits
