from cpu.utils.binary import bin_list_value


class Decoder:
    def __init__(self, in_size=4) -> None:
        self.in_size = in_size
        self.out_size = 2**in_size
        self.bits: list[int]
        self.clr()

    def clr(self):
        self.bits = [0] * self.out_size

    @property
    def out(self):
        output = [0] * self.out_size
        index = bin_list_value(self.bits)
        output[index] = 1
        return output
