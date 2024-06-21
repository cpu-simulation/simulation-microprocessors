import json

from django.http import HttpResponseServerError
from rest_framework.decorators import api_view
from rest_framework.response import Response

from ..lazycpu import WorkingCPU


@api_view(["POST"])
def compile(request):
    try:
        data = request.data
        print(f"{data = }")
        WorkingCPU.compile(data["instructions"])
        response = Response(WorkingCPU.memory.read_bulk())
    except Exception as e:
        response = Response(data=f'Internal Server ErrEEor:\n{e} ', exception=HttpResponseServerError, status=500)

    return response

@api_view(['GET'])
def execute(request):
    try:
        WorkingCPU.execute()
        response = Response("OK", 200)

    except Exception:
        response = Response(data='Internal Server Error', exception=HttpResponseServerError, status=500)

    return response
