from cpu.components.register import Register
from utils.binary import bin_list_value


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

    def load(self, condition=True):
        if bool(condition):
            index = bin_list_value(self.AR.bits)
            self.cells[index].bits = self.bus.out

    def write(self, data: list[int], address: int):
        self.cells[address].bits = data

    def read(self, address):
        return self.cells[address].bits

    def print(self):
        for i in range(len(self.cells)):
            cell = self.cells[i]
            v = bin_list_value(cell.bits)
            if sum(cell.bits) != 0:
                print(hex(i), hex(v))


class Cell:
    def __init__(self, size) -> None:
        self.size = size
        self.bits: list[int]
        self.clr()

    def clr(self):
        self.bits = [0] * self.size
