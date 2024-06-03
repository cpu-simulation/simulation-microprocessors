class Flags:
    def __init__(self) -> None:
        self._e = 0
        self._fgi = 0
        self._fgo = 0
        self._r = 0

    @property
    def E(self):
        return self._e

    @E.setter
    def E(self, value):
        self._e = value

    @property
    def FGI(self):
        return self._fgi

    @FGI.setter
    def FGI(self, value):
        self._fgi = value

    @property
    def FGO(self):
        return self._fgo

    @FGO.setter
    def FGO(self, value):
        self._fgo = value

    @property
    def R(self):
        return self._fgi or self._fgo
