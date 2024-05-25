from cpu.bus import Bus
from cpu.components.register import Register 
from cpu.memory import Memory
from cpu.ALU import ALU
from cpu.components.flag import Flags
class CPU:
    def __init__(self):
        # Bus
        bus = Bus(size=16)
        
        # Registers
        AR = Register(size=12, bus=bus)
        PC = Register(size=12, bus=bus)
        DR = Register(size=16, bus=bus)
        AC = Register(size=16, bus=bus)
        IR = Register(size=16, bus=bus)
        TR = Register(size=16, bus=bus)
        INPR = Register(size=8, bus=bus)
        OUTR = Register(size=8, bus=bus)
        

        bus.add(AR, PC, DR, AC, IR, TR)

        # Memory
        memory = Memory(bus=bus, AR=AR)

        # ALU
        alu = ALU()

        # Flag?! Flags will be properties of CPU class
        
        flags = Flags()
        

        # CU
        pass 

    def compile(self):
        """
        Compile, reset code memory, write compiled instructions
        """

    def execute(self):
        """
        Prepare and run CU.run()
        Prepare means: Clear Registers, SC = 0, PC = 1 because 
        PC = 0 points to interrupt instruction
        """
