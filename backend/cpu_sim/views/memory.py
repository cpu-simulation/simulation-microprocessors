import json 
from django.http import JsonResponse, HttpResponse, HttpResponseServerError
from ..lazycpu import WorkingCPU
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def read_memory(request):
    data = WorkingCPU.memory.read_bulk()
    return Response(data)

@api_view(['POST'])
def write_to_memory(request):
    try:
        data = json.loads(request.data)
        for cell_info in data:
            address = int(cell_info["address"], 16)
            value = list(str(int(cell_info["value"], 16)))
            WorkingCPU.memory.write(address=address, data=value)
        response = read_memory()
    except Exception as e:
        response = Response(data='Internal Server Error', exception=HttpResponseServerError, status=500)
    
    return response
