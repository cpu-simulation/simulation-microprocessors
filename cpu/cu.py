from cpu.bus import Bus
from cpu.components.register import Register
from cpu.memory import Memory
from cpu.utils.binary import dec_to_binlist
from cpu.components.sc import SequenceCounter
from cpu.components.decoder import Decoder
from cpu.components.encoder import Encoder
from cpu.components.flag import Flags
from cpu.ALU import ALU
from cpu.compiler import Compiler


# Bus Codes
class BC:
    AR = 1
    PC = 2
    DR = 3
    AC = 4
    IR = 5
    TR = 6
    RAM = 7


class ControlUnit:
    def __init__(
        self,
        bus: Bus,
        memory: Memory,
        alu: ALU,
        flags: Flags,
        AR: Register,
        AC: Register,
        PC: Register,
        DR: Register,
        IR: Register,
        TR: Register,
    ) -> None:
        self.sc_size = 4
        self.sc = SequenceCounter(self.sc_size)
        self.t_decoder = Decoder(self.sc_size)
        self.encoder = Encoder()
        self.d_decoder = Decoder(3)
        self.alu_encoder = Encoder()

        self.flags = flags

        self.AR = AR
        self.PC = PC
        self.DR = DR
        self.AC = AC
        self.IR = IR
        self.TR = TR

        self.memory = memory
        self.bus = bus
        self.alu = alu

    @property
    def T(self):
        self.t_decoder.bits = self.sc.out
        t = self.t_decoder.out
        self.sc.inr()
        return t

    def print_registers(self):
        print("  Registers")
        print("    PC", self.PC.out)
        print("    AR", self.AR.out)
        print("    IR", self.IR.bits)
        print("    DR", self.DR.out)
        print("    AC", self.AC.out)

    def print_mods(self):
        print("  Modules")
        print("    BUS", self.bus.out)
        print("    ALU", self.alu.out)

    def run(self):
        R = self.flags.R
        for _ in range(7):
            T = self.T

            instruction = self.IR.bits
            I = instruction[0]
            self.d_decoder.bits = instruction[1:4]
            D = self.d_decoder.out
            B = list(reversed(self.IR.out))

            r = D[7] & (1 - I) & T[3]
            p = D[7] & I & T[3]

            self.encoder.i[BC.PC] = (1 - R) & T[0] | D[5] & T[4]
            self.encoder.i[BC.RAM] = (
                (1 - R) & T[1]
                | (1 - D[7]) & I & T[3]
                | (D[0] | D[1] | D[2] | D[6]) & T[4]
            )
            self.encoder.i[BC.IR] = (1 - R) & T[2]
            self.encoder.i[BC.AC] = D[3] & T[4]
            self.encoder.i[BC.AR] = D[4] & T[4] | D[5] & T[5]
            self.encoder.i[BC.DR] = D[6] & T[6]

            self.bus.s = self.encoder.out

            # LDA - Transfer DR to AC
            self.alu_encoder.i[0] = D[2] & T[5]
            # ADD
            self.alu_encoder.i[1] = D[1] & T[5]
            # AND
            self.alu_encoder.i[4] = D[0] & T[5]
            # CMA - Complement Accumumlator
            self.alu_encoder.i[7] = r & B[9]
            # shr - Shift accumulator to right
            self.alu_encoder.i[8] = r & B[7]
            # shl - Shift accumulator to left
            self.alu_encoder.i[12] = r & B[6]

            self.alu.s = self.alu_encoder.out

            self.AR.load((1 - R) & (T[0] | T[2]) | (1 - D[7]) & I & T[3])
            self.IR.load((1 - R) & T[1])
            self.DR.load((D[0] | D[1] | D[2] | D[6]) & T[4])
            self.AC.load(
                (D[0] | D[1] | D[2]) & T[5] | (B[9] | B[6] | B[7]) & r | p & B[11]
            )
            self.memory.load((D[3] | D[5]) & T[4] | D[6] & T[6])
            self.PC.load(D[4] & T[4] | D[5] & T[5])

            self.flags.E = (
                (1 - (r & B[10] & B[7] & B[6])) & self.flags.E
                | ((r & B[8]) ^ self.flags.E)
                | (r & B[7] & self.AC.out[-1])
                | (r & B[6] & self.AC.out[0])
            )

            isz = D[6] & T[6] & int(all(bit == 0 for bit in self.DR.out))

            spa = r & B[4] & self.AC.bits[0]
            sna = r & B[3] & self.AC.bits[0]
            sza = r & B[2] & int(all(bit == 0 for bit in self.AC.out))
            sze = r & B[1] & self.flags.E

            self.PC.inr((1 - R) & T[1] | isz | spa | sna | sza | sze)
            self.AR.inr(D[5] & T[4])
            self.DR.inr(D[6] & T[5])
            self.AC.inr(r & B[5])

            self.AC.clr(r & B[11])

            print(f"- T{T.index(1)}")
            self.print_registers()
            self.print_mods()
            print()


bus = Bus()
AR = Register(12, bus)
PC = Register(size=12, bus=bus)
DR = Register(size=16, bus=bus)
IR = Register(size=16, bus=bus, out_range=slice(4, 16))
TR = Register(size=16, bus=bus)
flags = Flags()
alu = ALU(DR=DR, AC=None, flags=flags, size=16)
AC = Register(16, alu)
alu.AC = AC
memory = Memory(bus=bus, AR=AR)
bus.add(None, AR, PC, DR, AC, IR, TR, memory)

PC.write(dec_to_binlist(1, 12))
CU = ControlUnit(
    bus=bus,
    memory=memory,
    alu=alu,
    flags=flags,
    AR=AR,
    AC=AC,
    PC=PC,
    DR=DR,
    IR=IR,
    TR=TR,
)

instructions_str = """
    CMA
"""

AC.write(dec_to_binlist(35, 16))

instructions = Compiler().compile(instructions_str)

print("Instructoins:")
for i, instruction in enumerate(instructions):
    print(instruction)
    memory.write(instruction, i + 1)

memory.write(dec_to_binlist(35, size=16), 50)
memory.write(dec_to_binlist(75, size=16), 51)
memory.write(dec_to_binlist(190, size=16), 52)

print("\nOccupied memory addresses:")
memory.print()

print()
CU.run()

memory.print()
