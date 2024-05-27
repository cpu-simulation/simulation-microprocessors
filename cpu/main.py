from cpu.bus import Bus
from cpu.components.register import Register
from cpu.memory import Memory
from cpu.ALU import ALU
from cpu.components.flag import Flags
from cpu.compiler import Compiler, CompileError
# from cpu.CU import CU


class CPU:
    def __init__(self):
        self.compiler = Compiler()

        bus = Bus(size=16)
        self.bus = bus

        AR = Register(size=12, bus=bus)
        self.memory = Memory(bus=bus, AR=AR)

        self.alu = ALU()
        AC = Register(size=16, bus=self.alu)

        PC = Register(size=12, bus=bus)
        DR = Register(size=16, bus=bus)
        IR = Register(size=16, bus=bus)
        TR = Register(size=16, bus=bus)
        INPR = Register(size=8, bus=bus)
        OUTR = Register(size=8, bus=bus)

        self.flags = Flags()

        bus.add(AR, PC, DR, AC, IR, TR, self.memory)

        # self.CU = CU()

    def compile(self, text):
        """
        Compile, reset code memory, write compiled instructions
        """
        try:
            instructions = self.compiler.compile(text)
            for i, instruction in enumerate(instructions):
                self.memory.write(instruction, i + 1)
        except CompileError as e:
            print(f"Compile Error: {e}")
            return None

    def execute(self):
        """
        Prepare and run CU.run()
        Prepare means: Clear Registers, SC = 0, PC = 1 because
        PC = 0 points to interrupt instruction
        """
        self.AR.clr()
        self.AC.clr()
        self.DR.clr()
        self.TR.clr()
        self.INPR.clr()
        self.OUTR.clr()
        self.PC.clr()

        self.flags.E = 0
        self.flags.FGI = 0
        self.flags.FGO = 0

        self.PC.inr()

        # self.CU.run()


c = CPU()
instructions_str = """
    0 ADD 45A
    CLA
    0 LDA 234
    1 BSA 135
    SZA
    CME
"""
c.compile(instructions_str)
