

class CPU:
    def __init__(self):
        # CU
        # Memory
        # Bus
        # Registers
        # ALU
        # Flag?! Flags will be properties of CPU class
        pass 

    def compile(self):
        """
        Compile, reset code memory, write compiled instructions
        """

    def execute(self):
        """
        Prepare and run CU.run()
        Prepare means: Clear Registers, SC = 0, PC = 1 because 
        PC = 0 points to interrupt instruction
        """
        