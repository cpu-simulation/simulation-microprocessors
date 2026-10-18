"""The same five operations the Django API exposes, called from the browser through Pyodide.

Every handler takes and returns a JSON string, so nothing crosses the Python/JS boundary
except text. The logic mirrors backend/cpu_sim/views/.
"""

import json

from cpu.main import CPU
from cpu.utils.binary import dec_to_binlist

_cpu = CPU()


def memory_read(_payload):
    return json.dumps(_cpu.memory.read_bulk())


def register_read(_payload):
    return json.dumps(_cpu.cu.get_registers())


def compile_program(payload):
    _cpu.compile(json.loads(payload)["instructions"])
    return json.dumps("OK")


def execute(_payload):
    _cpu.execute()
    return json.dumps("OK")


def memory_write(payload):
    for cell in json.loads(payload):
        address = int(cell["address"], 16)
        value = dec_to_binlist(int(cell["value"], 16), _cpu.memory.cell_size)
        _cpu.memory.write(address=address, data=value)
    return json.dumps("OK")


HANDLERS = {
    "memory/read": memory_read,
    "memory/write": memory_write,
    "register/read": register_read,
    "core/compile": compile_program,
    "core/instruction": execute,
}


def call(route, payload="null"):
    return HANDLERS[route](payload)
