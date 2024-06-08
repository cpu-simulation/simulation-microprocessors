from cpu.components.ALU.arithmetic import Arithmetic
from cpu.components.ALU.logic import Logic
from cpu.components.ALU.shift import Shift
from cpu.components.register import Register
from cpu.components.mux import Mux


class ALU:
    def __init__(self, DR: Register, AC: Register, INPR: Register, size=4) -> None:
        self.arithmetic = Arithmetic(size)
        self.logic = Logic(size)
        self.shift = Shift(size)
        self.DR = DR
        self.AC = AC
        self.INPR = INPR
        self.size = size
        self._s: list[int]
        self.mux = [Mux(4) for _ in range(size)]
        self._c = 0
        self.s = [0] * 4

    def update(self):
        self.arithmetic.A = self.DR.out
        self.arithmetic.B = self.AC.out
        self.logic.A = self.AC.out
        self.logic.B = self.DR.out
        self.shift.A = self.AC.out
        for index, mux in enumerate(self.mux):
            mux.i[0] = self.arithmetic.out[index]
            mux.i[1] = self.logic.out[index]
            mux.i[2] = self.shift.out[index]
        for i in range(-1, -len(self.INPR.out) - 1, -1):
            self.mux[i].i[3] = self.INPR.out[i]

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
        self.shift.s = [value[2]]

    @property
    def c(self):
        return self._c

    @c.setter
    def c(self, value):
        self._c = value
        self.arithmetic.c = value

    @property
    def carry(self):
        return self.arithmetic.carry

    @property
    def out(self):
        self.update()
        return [mux.out for mux in self.mux]


# dr = Register(4, None)
# ac = Register(4, None)
# ir = Register(2, None)

# alu = ALU(dr, ac, ir)

# dr.write([1, 0, 0, 1])
# ac.write([0, 0, 1, 0])
# ir.write([1, 0])

# alu.s = [1, 1, 0, 0]
# alu.c = 0

# print(alu.out)
