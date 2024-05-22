from components.data_handling.mux import Mux
from components.utilities.reversed_index_list import ReversedIndexList


class Shift:
    def __init__(self, size: int):
        if size <= 2:
            raise Exception("Size of shift module cannot be less than 2")
        self.size = size
        self.mux = [Mux(2) for _ in range(size)]

        self._A: ReversedIndexList
        self._s = [0]
        self._i = 0

        self.i = 0
        self.A = ReversedIndexList([0] * size)

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value: ReversedIndexList[int]):
        for i in range(self.size):
            self.mux[i].s = value

    @property
    def i(self):
        return self._i

    @i.setter
    def i(self, value):
        self._i = value
        self.mux[-1].i[0] = value
        self.mux[0].i[1] = value

    @property
    def A(self):
        return self._A

    @A.setter
    def A(self, value: ReversedIndexList[int]):
        self._A = value
        self.mux[-2].i[0] = value[-1]
        self.mux[1].i[1] = value[0]
        for i in range(1, self.size - 1):
            self.mux[i - 1].i[0] = value[i]
            self.mux[i + 1].i[1] = value[i]

    @property
    def out(self):
        return ReversedIndexList([mux.out for mux in self.mux], True)


# shift = Shift(4)
# shift.i = 0
# shift.A = ReversedIndexList([0, 1, 1, 0])
# shift.s = [0]  # zero for Right, one for left
# print(shift.out)
