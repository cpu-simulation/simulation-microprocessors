from cpu.components.mux import Mux


class Logic:
    def __init__(self, size: int) -> None:
        self.size = size
        self.mux = [Mux(4) for _ in range(self.size)]

        self._s = [0] * self.mux[0].pins
        self.A = [0] * size
        self.B = [0] * size

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value: list[int]):
        self._s = value
        for i in range(self.size):
            self.mux[i].s = value

    @property
    def out(self):
        for i in range(self.size):
            self.mux[i].i[0] = self.A[i] & self.B[i]
            self.mux[i].i[1] = self.A[i] | self.B[i]
            self.mux[i].i[2] = self.A[i] ^ self.B[i]
            self.mux[i].i[3] = 1 - self.A[i]
        return [self.mux[i].out for i in range(self.size)]


# l = Logic(4)
# l.A = [1, 0, 1, 0]
# l.B = [0, 1, 1, 0]
# l.s = [0, 0]
# print(l.out)
