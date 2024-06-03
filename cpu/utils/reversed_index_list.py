class ReversedIndexList(list):
    def __init__(self, number=[], reverse=False, size=None):
        if isinstance(number, list):
            if reverse:
                super().__init__(reversed(number))
            else:
                super().__init__(number)
        else:
            bits = list(bin(number)[2:])
            bits = [0] * (
                0 if size is None or len(bits) >= size else size - len(bits)
            ) + bits
            super().__init__(int(bit) for bit in bits)

    def __getitem__(self, index):
        if isinstance(index, slice):
            le = len(self)
            return super().__getitem__(slice(le - index.stop, le - index.start))
        return super().__getitem__(-(index + 1))

    def __setitem__(self, index, value):
        if isinstance(index, slice):
            le = len(self)
            return super().__setitem__(slice(le - index.stop, le - index.start))
        super().__setitem__(-(index + 1), value)

    def __iter__(self):
        return reversed(self)
