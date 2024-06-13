import json

from django.http import HttpResponse, JsonResponse, HttpResponseServerError
from ..lazycpu import WorkingCPU


def compile(request):
    try:
        data: dict[str, list[str]] = json.loads(request.data)
        WorkingCPU.compile(data["instructions"])
        response = HttpResponse("OK", 200)
    except Exception:
        response = HttpResponseServerError("Internal Server Error", 500)

    return response


def execute(request):
    try:
        WorkingCPU.execute()
        response = HttpResponse("OK", 200)

    except Exception:
        response = HttpResponseServerError("Internal Server Error", 500)

    return response
