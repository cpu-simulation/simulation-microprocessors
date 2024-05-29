from cpu.components.ALU.arithmetic import Arithmetic
from cpu.components.ALU.logic import Logic
from cpu.components.ALU.shift import Shift
from cpu.components.flag import Flags
from cpu.components.register import Register
from cpu.utils.reversed_index_list import ReversedIndexList
from cpu.components.mux import Mux


class ALU:
    def __init__(self, DR: Register, AC: Register, flags: Flags, size=16) -> None:
        self.arithmetic = Arithmetic(size)
        self.logic = Logic(size)
        self.shift = Shift(size)
        self.DR = DR
        self.AC = AC
        self.size = size
        self._s = ReversedIndexList(0, size=size)
        self.mux = [Mux(4) for _ in range(size)]

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, vlue: ReversedIndexList):
        pass
