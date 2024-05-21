class ReversedIndexList(list):
    def __init__(self, hex_number: hex = None):
        if hex_number is None:
            hex_number = list()

        bits = list(bin(hex_number)[2:])
        super().__init__(int(bit) for bit in bits)

    def __getitem__(self, index):
        return super().__getitem__(-(index + 1))

    def __setitem__(self, index, value):
        super().__setitem__(-(index + 1), value)

    def __iter__(self):
        return reversed(self)