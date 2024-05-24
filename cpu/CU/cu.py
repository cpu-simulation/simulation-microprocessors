from cpu.bus import Bus
from cpu.components.register import Register
from cpu.memory import Memory
from cpu.utils.reversed_index_list import ReversedIndexList


class ControlUnit:
    def __init__(
        self,
        bus: Bus,
        memory,
        AR: Register,
        AC: Register,
        PC: Register,
        DR: Register,
        IR: Register,
        TR: Register,
    ) -> None:
        self.bus = bus
        self.memory = memory
        self.AR = AR
        self.AC = AC
        self.PC = PC
        self.DR = DR
        self.IR = IR
        self.TR = TR

        self.bus_codes = {
            self.AR: ReversedIndexList([0, 0, 1]),
            self.PC: ReversedIndexList([0, 1, 0]),
            self.DR: ReversedIndexList([0, 1, 1]),
            self.AC: ReversedIndexList([1, 0, 0]),
            self.IR: ReversedIndexList([1, 0, 1]),
            self.TR: ReversedIndexList([1, 1, 0]),
            self.memory: ReversedIndexList([1, 1, 1]),
        }

    def run(self):
        PC = self.PC
        AR = self.AR
        IR = self.IR
        memory = self.memory

        self.send_via_bus(PC, AR)
        if not sum(memory[AR]):  # memory[AR] was all zeros
            return 0  # Operation exit with code 0

        self.send_via_bus(memory[AR], IR)
        PC.inr()

        # Decode
        address = IR.bits[:12]
        I = IR.bits[15]
        D7 = IR.bits[12:15]

        if D7 == [1, 1, 1]:
            print("Register/IO")
        else:
            print("Memory")

    def send_via_bus(self, R1: Register, R2: Register = None):
        self.bus.s = self.bus_codes[R1]
        if R2:
            R2.load()


bus = Bus(size=8)
AR = Register(4, bus)
PC = Register(4, bus)
DR = Register(4, bus)
AC = Register(4, bus)
IR = Register(4, bus)
TR = Register(4, bus)
memory = Memory(bus=bus, AR=AR)
bus.add(AR, PC, DR, AC, IR, TR, memory)
CU = ControlUnit(bus=bus, memory=memory, AR=AR, AC=AC, PC=PC, DR=DR, IR=IR, TR=TR)

DR.write([0, 0, 1, 0])

CU.send_via_bus(DR)

print(bus.out)
