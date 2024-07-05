from cpu.utils.lookup_dicts import (
    storage_lookup_dict,
    io_lookup_dict,
    register_lookup_dict,
)

from cpu.utils.binary import dec_to_binlist


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

    def compile(self, text):
        lines = (
            text
            if isinstance(text, list)
            else list(map(str.strip, text.strip().split("\n")))
        )
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
                instructions.append(dec_to_binlist(instruction, size=16))
            elif len(line) == 2:
                i = 0x0000
                if len(line[0]) == 4:
                    if line[0][3].upper() == "I":
                        i = 0x8000
                    else:
                        raise CompileError("value", index + 1, "i is not valid")
                opcode = self.storage.get(line[0][:3], None)
                if opcode is None:
                    raise CompileError("syntax", index + 1)
                address = 0
                try:
                    address = int(line[1], 16)
                except ValueError:
                    raise CompileError(
                        "value", index + 1, "invalid value for address"
                    ) from None
                instructions.append(dec_to_binlist(i + opcode + address, size=16))
            else:
                raise CompileError("syntax", index + 1)
        return instructions


# c = Compiler()
# instructions_str = """
#     ADD 45A
#     CLA
#     LDA 234
#     BSAI 135
#     SZA
#     CME
# """
# for inst in c.compile(instructions_str):
#     print(inst)
