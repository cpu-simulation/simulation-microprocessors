import json

from django.http import HttpResponseServerError
from rest_framework.decorators import api_view
from rest_framework.response import Response

from ..lazycpu import WorkingCPU


@api_view(["GET"])
def read_register(request):
    data = WorkingCPU.cu.get_registers()
    return Response(data)


@api_view(["POST"])
def write_to_register(request):
    try:
        data: dict[str, str] = json.loads(request.data)
        # functions.register_write(data)
        response = Response("OK", 200)

    except Exception:
        response = Response(
            data="Internal Server Error", exception=HttpResponseServerError, status=500
        )

    return response
