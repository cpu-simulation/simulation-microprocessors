class Flag:
    def __init__(self) -> None:
        self._flag = 0

    @property
    def flag(self):
        return self._flag
    
    @flag.setter
    def flag(self, value):
        self._flag = value