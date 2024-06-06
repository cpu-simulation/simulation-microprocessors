from cpu.bus import Bus
from cpu.components.register import Register
from cpu.memory import Memory
from cpu.utils.binary import bin_list_value
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
        INPR: Register,
        OUTR: Register,
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
        self.INPR = INPR
        self.OUTR = OUTR

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
        print(" Registers")
        print("   PC", self.PC.out)
        print("   AR", self.AR.out)
        print("   IR", self.IR.bits)
        print("   DR", self.DR.out)
        print("   AC", self.AC.out)
        # print("    INPR", self.INPR.out)
        # print("    OUTR", self.OUTR.out)

    def print_mods(self):
        print(" Modules")
        print("   BUS", self.bus.out)
        print("   ALU", self.alu.out)

    def run(self, num):
        while T := self.T:
            self.flags.R = (
                (1 - T[0])
                & (1 - T[1])
                & (1 - T[2])
                & self.flags.IEN
                & (self.flags.FGI | self.flags.FGO)
                | self.flags.R
            ) & (1 - self.flags.R & T[2])
            R = self.flags.R

            instruction = self.IR.bits
            I = instruction[0]
            self.d_decoder.bits = instruction[1:4]
            D = self.d_decoder.out
            B = list(reversed(self.IR.out))

            r = D[7] & (1 - I) & T[3]
            p = D[7] & I & T[3]

            if bin_list_value(self.PC.out) == num + 2:
                break

            self.encoder.i[BC.PC] = T[0] | D[5] & T[4]
            self.encoder.i[BC.RAM] = (
                (1 - R) & T[1]
                | (1 - D[7]) & I & T[3]
                | (D[0] | D[1] | D[2] | D[6]) & T[4]
            )
            self.encoder.i[BC.IR] = (1 - R) & T[2]
            self.encoder.i[BC.AC] = D[3] & T[4] | p & B[10]
            self.encoder.i[BC.AR] = D[4] & T[4] | D[5] & T[5]
            self.encoder.i[BC.DR] = D[6] & T[6]
            self.encoder.i[BC.TR] = R & T[1]

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
            self.alu_encoder.i[10] = r & B[6]
            # INP - Transfer INPR to AC
            self.alu_encoder.i[12] = p & B[11]

            self.alu.s = self.alu_encoder.out

            self.AR.load((1 - R) & (T[0] | T[2]) | (1 - D[7]) & I & T[3])
            self.IR.load((1 - R) & T[1])
            self.DR.load((D[0] | D[1] | D[2] | D[6]) & T[4])
            self.AC.load(
                (D[0] | D[1] | D[2]) & T[5] | (B[9] | B[6] | B[7]) & r | p & B[11]
            )
            self.memory.load((D[3] | D[5]) & T[4] | D[6] & T[6] | R & T[1])
            self.PC.load(D[4] & T[4] | D[5] & T[5])
            self.OUTR.load(p & B[10])
            self.TR.load(R & T[0])

            self.flags.E = (
                (1 - (r & B[10] & B[7] & B[6])) & self.flags.E
                | ((r & B[8]) ^ self.flags.E)
                | (r & B[7] & self.AC.out[-1])
                | (r & B[6] & self.AC.out[0])
                | D[1] & T[5] & self.alu.carry
                | (1 - D[1] & T[5]) & self.flags.E
            )
            self.flags.FGI = (1 - p & B[11]) & self.flags.FGI
            self.flags.FGO = (1 - p & B[10]) & self.flags.FGO
            self.flags.IEN = (
                (1 - R & T[2]) & (1 - p & B[6]) & (p & B[7] | self.flags.IEN)
            )

            isz = D[6] & T[6] & int(all(bit == 0 for bit in self.DR.out))

            spa = r & B[4] & self.AC.bits[0]
            sna = r & B[3] & self.AC.bits[0]
            sza = r & B[2] & int(all(bit == 0 for bit in self.AC.out))
            sze = r & B[1] & self.flags.E
            ski = p & B[9] & self.flags.FGI
            sko = p & B[8] & self.flags.FGO

            self.PC.inr(
                (1 - R) & T[1] | isz | spa | sna | sza | sze | ski | sko | R & T[2]
            )
            self.AR.inr(D[5] & T[4])
            self.DR.inr(D[6] & T[5])
            self.AC.inr(r & B[5])

            self.AC.clr(r & B[11])
            self.AR.clr(R & T[0])
            self.PC.clr(R & T[1])
            self.sc.clr(
                R & T[2]
                | (D[0] | D[1] | D[2] | D[5]) & T[5]
                | (D[3] | D[4]) & T[4]
                | D[6] & T[6]
                | r
                | p
            )

            # print(f"- T{T.index(1)}")
            # self.print_registers()
            # self.print_mods()
            # print()
