from django.urls import path

from .views import (
    core,
    memory,
    register,
)

urlpatterns = [
    path("memory/read", memory.read_memory, name="read_memory"),
    path("memory/write", memory.write_to_memory, name="write_memory"),
    path("register/read", register.read_register, name="read_register"),
    path("register/write", register.write_to_register, name="write_register"),
    path("core/compile", core.compile, name="compile"),
    path("core/instruction", core.execute, name="execute"),
]
