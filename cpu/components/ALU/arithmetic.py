from cpu.components.ALU.adder import FullAdder
from cpu.components.mux import Mux


class Arithmetic:
    def __init__(self, size: int) -> None:
        self.size = size
        self.mux = [Mux(4) for _ in range(size)]
        self.adders = [FullAdder() for _ in range(size)]
        self._A: list[int]
        self._B: list[int]
        self._s = [0] * 2
        self.A = [0] * size
        self.B = [0] * size
        self.c = 0

    @property
    def A(self):
        return self._A

    @A.setter
    def A(self, value: list[int]):
        self._A = value
        for i in range(self.size):
            self.adders[i].a = value[i]

    @property
    def B(self):
        return self._B

    @B.setter
    def B(self, value: list[int]):
        self._B = value
        for i in range(self.size):
            self.mux[i].i[0] = 0
            self.mux[i].i[1] = value[i]
            self.mux[i].i[2] = 1 - value[i]
            self.mux[i].i[3] = 1
        for i in range(self.size):
            self.adders[i].b = self.mux[i].out

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value: list[int]):
        self._s = value
        for i in range(self.size):
            self.mux[i].s = value
        for i in range(self.size):
            self.adders[i].b = self.mux[i].out

    @property
    def out(self):
        self.adders[-1].c = self.c
        for i in range(self.size - 2, -1, -1):
            self.adders[i].c = self.adders[i + 1].carry
        return [adder.sum for adder in self.adders]

    @property
    def carry(self):
        return self.adders[-1].carry


# a = Arithmetic(4)
# a.A = [1, 0, 1, 0]
# a.B = [0, 0, 1, 0]
# a.s = [0, 1]
# a.c = 0

# print(a.out, a.carry)
