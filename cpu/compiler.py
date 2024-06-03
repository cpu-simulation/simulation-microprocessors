from cpu.utils.lookup_dicts import (
    storage_lookup_dict,
    io_lookup_dict,
    register_lookup_dict,
)

from cpu.utils.reversed_index_list import ReversedIndexList


class CompileError(Exception):
    def __init__(self, type, line, msg=None, hint=None) -> None:
        self.type = type
        self.line = line
        self.msg = msg
        self.hint = hint
        super().__init__(type, line, msg, hint)

    def __str__(self) -> str:
        return super().__str__()


class Compiler:
    def __init__(self) -> None:
        self.storage = storage_lookup_dict
        self.register = register_lookup_dict
        self.io = io_lookup_dict
        self.i = {"0": 0x0000, "1": 0x8000}

    def compile(self, text):
        lines = list(map(str.strip, text.strip().split("\n")))
        instructions = []
        for index, line in enumerate(lines):
            line = line.split(" ")
            if len(line) == 1:
                instruction = self.register.get(line[0], None)
                instruction = (
                    self.io.get(line[0], None) if instruction is None else instruction
                )
                if instruction is None:
                    raise CompileError("syntax", index + 1)
                instructions.append(ReversedIndexList(instruction, size=16))
            elif len(line) == 3:
                i = self.i.get(line[0], None)
                if i is None:
                    raise CompileError("value", index + 1, "i is not valid")
                opcode = self.storage.get(line[1], None)
                if opcode is None:
                    raise CompileError("syntax", index + 1)
                address = 0
                try:
                    address = int(line[2], 16)
                except ValueError:
                    raise CompileError(
                        "value", index + 1, "invalid value for address"
                    ) from None
                instructions.append(ReversedIndexList(i + opcode + address, size=16))
            else:
                raise CompileError("syntax", index + 1)
        return instructions


# c = Compiler()
# instructions_str = """
#     0 ADD 45A
#     CLA
#     0 LDA 234
#     1 BSA 135
#     SZA
#     CME
# """
# print(c.compile(instructions_str))
