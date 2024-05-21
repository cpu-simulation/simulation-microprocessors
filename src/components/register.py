from reversed_index_list import ReversedIndexList


class Register:
    def __init__(self, size: int, bus: Bus):
        self.size = size
        self.bus = bus
        self.bits: ReversedIndexList[int]
        self.clr()

    def clr(self):
        self.bits = [0] * self.size

    def load(self):
        # Bus function
        for i in range(self.size):
            self.bits[i] = self.bus[i]

    def inr(self):
        carry = 1
        for i in range(self.size):
            self.bits[i] ^= carry
            carry &= self.bits[i]

    def write(self, data: list[int]):
        # Explicit writing on register
        reversed_data = ReversedIndexList(data)
        data_length = len(reversed_data)
        if self.size < data_length:
            raise OverflowError

        for i in range(data_length):
            self.bits[i] = reversed_data[i]


    def read(self):
        # Explicit reading from register
        return self.bits
