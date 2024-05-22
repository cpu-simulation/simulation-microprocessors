from components.mux import Mux
from components.register import Register
from utils.reversed_index_list import ReversedIndexList


class Bus:
    def __init__(self, elements=[], size=4) -> None:
        self.size = size
        a = Register(4, self)
        b = Register(4, self)
        c = Register(4, self)
        a.write([1, 0, 0, 1])
        b.write([0, 1, 1, 0])
        c.write([1, 1, 0, 0])
        self.elements = [a, b, c]
        self.mux = [Mux(size) for _ in range(size)]
        self.s = ReversedIndexList([0] * self.mux[0].pins)
        self.prepare()

    def prepare(self):
        for i in range(len(self.elements)):
            for j in range(len(self.elements[i].bits)):
                self.mux[j].i[i] = self.elements[i].bits[j]

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value):
        self._s = value
        for i in range(len(self.mux)):
            self.mux[i].s = value

    @property
    def out(self):
        return ReversedIndexList([mux.out for mux in self.mux], True)


# b = Bus()
# b.s = ReversedIndexList([1, 1])
# print(b.out)
