class FullAdder:
    def __init__(self) -> None:
        self._a = 0
        self._b = 0
        self._c = 0
        self.h1 = HalfAdder()
        self.h2 = HalfAdder()

    @property
    def a(self):
        return self._a

    @a.setter
    def a(self, value: int):
        self._a = value
        self.h1.a = value
        self.h2.a = self.h1.sum

    @property
    def b(self):
        return self._b

    @b.setter
    def b(self, value: int):
        self._b = value
        self.h1.b = value
        self.h2.a = self.h1.sum

    @property
    def c(self):
        return self._c

    @c.setter
    def c(self, value):
        self._c = value
        self.h2.b = value

    @property
    def sum(self):
        return self.h2.sum

    @property
    def carry(self):
        return self.h1.carry | self.h2.carry


class HalfAdder:
    def __init__(self) -> None:
        self.a = 0
        self.b = 0

    @property
    def sum(self):
        return self.a ^ self.b

    @property
    def carry(self):
        return self.a & self.b
