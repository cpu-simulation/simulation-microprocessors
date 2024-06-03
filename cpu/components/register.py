from cpu.utils.reversed_index_list import ReversedIndexList


class Register:
    def __init__(self, size: int, bus, out_range=None):
        self.size = size
        self.bus = bus
        self.bits: ReversedIndexList[int]
        self.clr()
        if out_range is None:
            out_range = (0, len(self.bits))
        self.out_range = out_range

    @property
    def out(self):
        r = self.out_range
        return ReversedIndexList(self.bits[r[0] : r[1]])

    def clr(self, condition=True):
        if bool(condition):
            self.bits = ReversedIndexList([0] * self.size)

    def load(self, condition=True):
        if bool(condition):
            for i in range(self.size):
                self.bits[i] = self.bus.out[i]

    def inr(self, condition=True):
        if bool(condition):
            carry = 1
            for i in range(self.size):
                b = self.bits[i]
                self.bits[i] ^= carry
                carry &= b

    def write(self, data: list[int]):
        # Explicit writing on register
        reversed_data = ReversedIndexList(data, size=self.size)
        if self.size < len(reversed_data):
            raise OverflowError

        self.bits = reversed_data

    def read(self):
        # Explicit reading from register
        return self.bits
