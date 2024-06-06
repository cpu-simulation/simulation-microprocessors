from cpu.components.ALU.arithmetic import Arithmetic
from cpu.components.ALU.logic import Logic
from cpu.components.ALU.shift import Shift
from cpu.components.flag import Flags
from cpu.components.register import Register
from cpu.components.mux import Mux
from math import log2, ceil


class ALU:
    def __init__(self, DR: Register, AC: Register, flags: Flags = None, size=4) -> None:
        self.arithmetic = Arithmetic(size)
        self.logic = Logic(size)
        self.r_shift = Shift(size)
        self.l_shift = Shift(size)
        self.r_shift.s = [0]
        self.l_shift.s = [1]
        self.DR = DR
        self.AC = AC
        self.size = size
        self.selector_size = ceil(log2(size))
        self._s: list[int]
        self.mux = [Mux(4) for _ in range(size)]
        self._c = 0
        self.s = [0] * self.selector_size

    def update(self):
        self.arithmetic.A = self.DR.out
        self.arithmetic.B = self.AC.out
        self.logic.A = self.AC.out
        self.logic.B = self.DR.out
        self.r_shift.A = self.AC.out
        self.l_shift.A = self.AC.out
        for index, mux in enumerate(self.mux):
            mux.i[0] = self.arithmetic.out[index]
            mux.i[1] = self.logic.out[index]
            mux.i[2] = self.r_shift.out[index]
            mux.i[3] = self.l_shift.out[index]

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value: list[int]):
        self._s = value
        for mux in self.mux:
            mux.s = value[0:2]
        self.logic.s = value[2:4]
        self.arithmetic.s = value[2:4]

    @property
    def c(self):
        return self._c

    @c.setter
    def c(self, value):
        self._c = value
        self.arithmetic.c = value

    @property
    def out(self):
        self.update()
        return [mux.out for mux in self.mux]


# dr = Register(4, None)
# ac = Register(4, None)

# alu = ALU(dr, ac)

# dr.write([1, 0, 0, 1])
# ac.write([0, 0, 1, 0])

# alu.s = [1, 1, 0, 0]
# alu.c = 1

# print(alu.out)
