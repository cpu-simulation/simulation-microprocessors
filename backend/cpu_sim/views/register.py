import json
from django.http import JsonResponse, HttpResponseServerError, HttpResponse

def read_register(request):
    data = ...  # functions.register_read()
    return JsonResponse(data)


def write_to_register(request):
    try:
        data: dict[str, str] = json.loads(request.data)
        # functions.register_write(data)
        response = HttpResponse("OK", 200)

    except Exception:
        response = HttpResponseServerError()

    return response
