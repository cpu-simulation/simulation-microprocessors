from cpu.bus import Bus
from cpu.components.register import Register
from cpu.memory import Memory
from cpu.ALU import ALU
from cpu.components.flag import Flags
from cpu.compiler import Compiler, CompileError
from cpu.cu import ControlUnit
from cpu.utils.binary import dec_to_binlist


class CPU:
    def __init__(self):
        self.instructions = []
        self.compiler = Compiler()

        bus = Bus(size=16)
        self.bus = bus

        self.AR = Register(size=12, bus=bus)
        self.DR = Register(size=16, bus=bus)
        self.INPR = Register(size=8, bus=bus)
        self.memory = Memory(bus=bus, AR=self.AR)
        self.alu = ALU(DR=self.DR, AC=None, INPR=self.INPR, size=16)
        self.AC = Register(size=16, bus=self.alu)
        self.alu.AC = self.AC

        self.PC = Register(size=12, bus=bus)
        self.IR = Register(size=16, bus=bus, out_range=slice(4, 16))
        self.TR = Register(size=16, bus=bus)
        self.OUTR = Register(size=8, bus=bus)

        self.flags = Flags()

        bus.add(None, self.AR, self.PC, self.DR, self.AC, self.IR, self.TR, self.memory)

        self.cu = ControlUnit(
            bus=self.bus,
            memory=self.memory,
            alu=self.alu,
            flags=self.flags,
            AR=self.AR,
            AC=self.AC,
            PC=self.PC,
            DR=self.DR,
            IR=self.IR,
            TR=self.TR,
            INPR=self.INPR,
            OUTR=self.OUTR,
        )

    def compile(self, text):
        """
        Compile, reset code memory, write compiled instructions
        """
        try:
            instructions = self.compiler.compile(text)
            self.instructions = instructions
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
        self.cu.sc.clr()

        self.flags.E = 0
        self.flags.FGI = 0
        self.flags.FGO = 0

        self.PC.inr()

        self.cu.run(len(self.instructions))


# c = CPU()
# instructions_str = """
#     0 LDA 32
#     0 ADD 33
#     0 STA 35
# """
# c.compile(instructions_str)

# print("Instructoins:")
# for i, instruction in enumerate(c.instructions):
#     print(instruction)
#     c.memory.write(instruction, i + 1)

# c.memory.write(dec_to_binlist(35, size=16), 50)
# c.memory.write(dec_to_binlist(75, size=16), 51)
# c.memory.write(dec_to_binlist(190, size=16), 52)

# print("\nOccupied memory addresses:")
# c.memory.print()

# print()
# c.execute()
# c.cu.print_mods()
# c.cu.print_registers()
# print()
# c.memory.print()
