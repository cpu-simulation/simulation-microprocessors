from components.mux import Mux
from utils.reversed_index_list import ReversedIndexList


class Logic:
    def __init__(self, size: int) -> None:
        self.size = size
        self.mux = [Mux(4) for _ in range(self.size)]

        self._s = ReversedIndexList([0] * self.mux[0].pins)
        self.A = ReversedIndexList([0] * size)
        self.B = ReversedIndexList([0] * size)

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value: ReversedIndexList):
        for i in range(self.size):
            self.mux[i].s = value

    @property
    def out(self):
        for i in range(self.size):
            self.mux[i].i[0] = self.A[i] & self.B[i]
            self.mux[i].i[1] = self.A[i] | self.B[i]
            self.mux[i].i[2] = self.A[i] ^ self.B[i]
            self.mux[i].i[3] = 1 - self.A[i]
        return ReversedIndexList([self.mux[i].out for i in range(self.size)], True)


# l = Logic(4)
# l.A = ReversedIndexList([1, 0, 1, 0])
# l.B = ReversedIndexList([0, 1, 1, 0])
# l.s = ReversedIndexList([1, 1])
# print(l.out)
