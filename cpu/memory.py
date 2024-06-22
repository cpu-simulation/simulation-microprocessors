from cpu.components.register import Register
from cpu.utils.binary import bin_list_value


class Memory:
    def __init__(self, bus, AR: Register, size=4096, cell_size=16) -> None:
        self.cells = [Cell(cell_size) for _ in range(size)]
        self.size = size
        self.cell_size = cell_size
        self.AR = AR
        self.bus = bus

    @property
    def out(self):
        index = bin_list_value(self.AR.out)
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
        memory_info = self.read_bulk()
        for cell_info in memory_info:
            address = cell_info["address"]
            value = cell_info["value"]
            if int(value, 16) != 0:
                print(address, value)


    def read_bulk(self):
        data = []
        for i in range(len(self.cells)):
            cell = self.cells[i]
            v = bin_list_value(cell.bits)
            if v == 0:
                continue
            data.append({"address": hex(i), "value": hex(v)})

        return data


class Cell:
    def __init__(self, size) -> None:
        self.size = size
        self.bits: list[int]
        self.clr()

    def clr(self):
        self.bits = [0] * self.size
