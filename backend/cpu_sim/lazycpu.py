from django.utils.functional import SimpleLazyObject
from cpu.main import CPU

WorkingCPU: CPU = SimpleLazyObject(CPU)