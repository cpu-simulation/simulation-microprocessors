def dec_to_binlist(number: int, size: int = None):
    bits = [int(bit) for bit in bin(number)[2:]]
    bits = [0] * (0 if size is None or len(bits) >= size else size - len(bits)) + bits
    return bits


def bin_list_value(number: list[int]):
    length = len(number)
    v = sum([number[i] * (2 ** (length - i - 1)) for i in range(length)])
    return v
