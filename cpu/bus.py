from cpu.components.mux import Mux
from cpu.utils.reversed_index_list import ReversedIndexList


class Bus:
    def __init__(self, size=4) -> None:
        self.size = size
        self.elements = []
        self.mux = [Mux(size) for _ in range(size)]
        self._s: ReversedIndexList
        self.s = ReversedIndexList([0] * self.mux[0].pins)

    def update(self):
        for i in range(len(self.elements)):
            for j in range(len(self.elements[i].bits)):
                self.mux[j].i[i] = self.elements[i].bits[j]

    def add(self, *elements):
        for element in elements:
            self.elements.append(element)

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
        self.update()
        return ReversedIndexList([mux.out for mux in self.mux], True)


# from cpu.components.register import Register

# bus = Bus()
# b = Register(4, bus)
# c = Register(4, bus)
# c.write([1, 1, 0, 0])
# b.write([0, 0, 1, 0])
# bus.add(c, b)
# bus.s = ReversedIndexList([0, 0])
# c.write([1, 0, 1, 1])
# b.load()
# b.inr()
# bus.s = ReversedIndexList([0, 1])
# print(bus.out)
