from cpu.bus import Bus
from cpu.components.register import Register
from cpu.memory import Memory
from cpu.utils.binary import dec_to_binlist
from cpu.components.sc import SequenceCounter
from cpu.components.decoder import Decoder
from cpu.components.encoder import Encoder
from cpu.components.flag import Flags
from cpu.ALU import ALU


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

    def run(self):
        R = self.flags.R
        for _ in range(6):
            T = self.T

            instruction = self.IR.bits
            I = instruction[15]
            self.d_decoder.bits = instruction[12:15]
            D = self.d_decoder.out
            B = self.IR.out

            r = D[7] & (not I) & T[3]
            p = D[7] & I & T[3]

            # fetch
            self.encoder.i[BC.PC] = (1 - R) & T[0]
            self.encoder.i[BC.RAM] = (
                (1 - R) & T[1]
                | (1 - D[7]) & I & T[3]
                | (D[0] | D[1] | D[2] | D[6]) & T[4]
            )

            self.bus.s = self.encoder.out

            self.AR.load((1 - R) & T[0])
            self.IR.load(1 - R & T[1])
            self.PC.inr(1 - R & T[1])
            self.DR.load((D[0] | D[1] | D[2] | D[6]) & T[4])
            self.AC.load(D[1] & T[5])

            # # Data Register
            # self.encoder.i[BC.DR] = D[2] & T[5] | D[6] & T[6]
            # self.DR.load((D[0] | D[1] | D[2] | D[6]) & T[4])
            # self.DR.inr(D[6] & T[5])
            # self.bus.s = self.encoder.out

            # # Accumulator
            # self.encoder.i[BC.AC] = D[3] & T[4]
            # self.AC.load(
            #     (D[0] | D[1] | D[2]) & T[5] | (B[9] | B[6] | B[7]) & r | p & B[11]
            # )
            # self.AC.inr(r & B[5])
            # self.AC.clr(r & B[11])

            # # Instruction Register
            # self.encoder.i[BC.IR] = (1-R) & T[2]
            # self.IR.load(1 - R & T[1])

            # # Memory
            # self.memory.load(bool((D[3] | D[5]) & T[4] | D[6] & T[6]))


bus = Bus()
AR = Register(12, bus)
PC = Register(size=12, bus=bus)
DR = Register(size=16, bus=bus)
IR = Register(size=16, bus=bus, out_range=(0, 12))
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
    0 LDA 32
"""

instructions = [
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
    # [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    # [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0],
    # [1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
    # [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    # [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
]

for i, instruction in enumerate(instructions):
    memory.write(instruction, i + 1)

memory.write(dec_to_binlist(20, size=16), 50)
memory.write(dec_to_binlist(75, size=16), 51)
memory.write(dec_to_binlist(190, size=16), 52)

memory.print()

# CU.run()
