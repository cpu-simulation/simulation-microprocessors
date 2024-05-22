from mux import Mux
from reversed_index_list import ReversedIndexList


class Shift:
    def __init__(self, register: ReversedIndexList[int], I_r=0, I_l=0):
        self.register = register
        self.I_r = I_r
        self.I_l = I_l

        self.size = len(register)  # Number of registers
        self.mux = [Mux(2) for _ in range(self.size)]
        self._s = [0]

        self.prepare()

    def prepare(self):
        self.mux[0].i[0] = self.I_r
        self.mux[0].i[1] = self.register[1]

        for i in range(1, self.size - 1):
            self.mux[i].i[0] = self.register[i - 1]
            self.mux[i].i[1] = self.register[i + 1]

        self.mux[-1].i[0] = self.register[-2]
        self.mux[-1].i[1] = self.I_l

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value: ReversedIndexList[int]):
        for i in range(self.size):
            self.mux[i].s = value

    @property
    def shr(self):
        self.s = [0]
        return shift.out

    @property
    def shl(self):
        self.s = [1]
        return shift.out

    @property
    def out(self):
        return ReversedIndexList([mux.out for mux in self.mux])


# register = ReversedIndexList([1, 0, 1, 0])
# shift = Shift(register)
# shift.s = [0]  # zeRo for Right, one for left
# print(shift.out)
