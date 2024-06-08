class Register:
    def __init__(self, size: int, bus, out_range=None):
        self.size = size
        self.bus = bus
        self.bits: list[int]
        self.clr()
        if out_range is None:
            out_range = slice(0, len(self.bits))
        self.out_range = out_range

    @property
    def out(self):
        return self.bits[self.out_range]

    def clr(self, condition=True):
        if bool(condition):
            self.bits = [0] * self.size

    def load(self, condition=True):
        if bool(condition):
            bus_output = self.bus.out
            for i in range(-1, -self.size - 1, -1):
                self.bits[i] = bus_output[i]

    def inr(self, condition=True):
        if bool(condition):
            carry = 1
            for i in range(self.size - 1, -1, -1):
                b = self.bits[i]
                self.bits[i] ^= carry
                carry &= b

    def write(self, data: list[int]):
        if self.size < len(data):
            raise OverflowError

        self.bits = data

    def read(self):
        # Explicit reading from register
        return self.bits
