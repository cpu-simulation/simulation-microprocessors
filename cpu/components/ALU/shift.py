from cpu.components.mux import Mux


class Shift:
    def __init__(self, size: int):
        if size <= 2:
            raise Exception("Size of shift module cannot be less than 2")
        self.size = size
        self.mux = [Mux(2) for _ in range(size)]

        self._A: list[int]
        self._s = [0]
        self._i = 0

        self.i = 0
        self.A = [0] * size

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value: list[int]):
        self._s = value
        for i in range(self.size):
            self.mux[i].s = value

    @property
    def i(self):
        return self._i

    @i.setter
    def i(self, value):
        self._i = value
        self.mux[0].i[0] = value
        self.mux[-1].i[1] = value

    @property
    def A(self):
        return self._A

    @A.setter
    def A(self, value: list[int]):
        self._A = value
        self.mux[1].i[0] = value[0]
        self.mux[-2].i[1] = value[-1]
        for i in range(1, self.size - 2):
            m = self.size - i - 1
            self.mux[m + 1].i[0] = value[i]
            self.mux[m - 1].i[1] = value[i]

    @property
    def out(self):
        return [mux.out for mux in self.mux]


# shift = Shift(6)
# shift.i = 0
# shift.A = [1, 0, 1, 1, 0, 1]
# shift.s = [1]  # zero for Right, one for left
# print(shift.out)
