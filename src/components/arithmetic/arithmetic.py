from components.arithmetic.adder import FullAdder
from components.data_handling.mux import Mux
from components.utilities.reversed_index_list import ReversedIndexList


class Arithmetic:
    def __init__(self, size: int) -> None:
        self.size = size
        self.mux = [Mux(size) for _ in range(size)]
        self.adders = [FullAdder() for _ in range(size)]
        self._A: ReversedIndexList
        self._B: ReversedIndexList
        self._s = ReversedIndexList([0] * self.mux[0].pins)

        self.A = ReversedIndexList([0] * size)
        self.B = ReversedIndexList([0] * size)
        self.c = 0

    @property
    def A(self):
        return self._A

    @A.setter
    def A(self, value: ReversedIndexList[int]):
        self._A = value
        for i in range(self.size):
            self.adders[i].a = value[i]

    @property
    def B(self):
        return self._B

    @B.setter
    def B(self, value: ReversedIndexList[int]):
        self._B = value
        for i in range(self.size):
            self.mux[i].i[0] = value[i]
            self.mux[i].i[1] = 1 - value[i]
            self.mux[i].i[2] = 0
            self.mux[i].i[3] = 1
        for i in range(self.size):
            self.adders[i].b = self.mux[i].out

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value: ReversedIndexList[int]):
        for i in range(self.size):
            self.mux[i].s = value
        for i in range(self.size):
            self.adders[i].b = self.mux[i].out

    @property
    def out(self):
        self.adders[0].c = self.c
        for i in range(1, self.size):
            self.adders[i].c = self.adders[i - 1].carry
        return ReversedIndexList([adder.sum for adder in self.adders], True)

    @property
    def carry(self):
        return self.adders[-1].carry



# a = Arithmetic(4)
# a.A = ReversedIndexList([0, 0, 1, 0])
# a.B = ReversedIndexList([0, 1, 1, 1])
# a.s = ReversedIndexList([0, 1])
# a.c = 1
# o = a.out

# print(a.out)