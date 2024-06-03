from cpu.components.mux import Mux


class Bus:
    def __init__(self, size=16) -> None:
        self.size = size
        self.elements = []
        self.mux = [Mux(size) for _ in range(size)]
        self._s: list[int]
        self.s = [0] * self.mux[0].pins

    def update(self):
        for i in range(len(self.elements)):
            if self.elements[i] is None:
                continue
            out = self.elements[i].out
            for j in range(-1, -len(out) - 1, -1):
                self.mux[j].i[i] = out[j]

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
        return [mux.out for mux in self.mux]


# from cpu.components.register import Register
#
# bus = Bus(8)
# b = Register(4, bus)
# c = Register(4, bus)
# c.write([1, 1, 0, 0])
# b.write([0, 0, 1, 0])
# bus.add(c, b)
# bus.s = [0, 0, 0]
# # c.write([1, 0, 1, 1])
# # b.load()
# # b.inr()
# # bus.s = [0, 0, 1]
# bus.update()
# print(bus.out)
