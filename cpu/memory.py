from cpu.utils.reversed_index_list import ReversedIndexList
from cpu.components.register import Register


class Memory:
    def __init__(self, bus, AR: Register, size=4096, cell_size=16) -> None:
        self.cells = [Cell(cell_size) for _ in range(size)]
        self.size = size
        self.cell_size = cell_size
        self.AR = AR
        self.bus = bus

    @property
    def out(self):
        index = sum([self.AR.bits[i] * (2**i) for i in range(len(self.AR.bits))])
        return self.cells[index].bits

    def load(self):
        index = sum([self.AR.bits[i] * (2**i) for i in range(len(self.AR.bits))])
        self.cells[index].bits = self.bus.out

    def write(self, data: list[int], address: int):
        self.cells[address].bits = data

    def read(self, address):
        return self.cells[address].bits


class Cell:
    def __init__(self, size) -> None:
        self.size = size
        self.bits: ReversedIndexList
        self.clr()

    def clr(self):
        self.bits = [0] * self.size
