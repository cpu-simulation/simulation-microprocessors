from cpu.components.ALU.arithmetic import Arithmetic
from cpu.components.ALU.logic import Logic
from cpu.components.ALU.shift import Shift
from cpu.components.flag import Flags
from cpu.components.register import Register
from cpu.components.mux import Mux


class ALU:
    def __init__(self, DR: Register, AC: Register, flags: Flags, size=16) -> None:
        self.arithmetic = Arithmetic(size)
        self.logic = Logic(size)
        self.shift = Shift(size)
        self.DR = DR
        self.AC = AC
        self.size = size
        self._s = [0] * size
        self.mux = [Mux(4) for _ in range(size)]

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value: list[int]):
        pass
