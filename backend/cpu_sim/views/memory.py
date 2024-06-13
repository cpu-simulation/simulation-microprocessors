import json 
from django.http import JsonResponse, HttpResponse, HttpResponseServerError
from ..lazycpu import WorkingCPU

def read_memory(request):
    data = WorkingCPU.memory.read_bulk()
    res = {"data": data}
    return JsonResponse(res)

def write_to_memory(request):
    try:
        data = json.loads(request.data)
        for cell_info in data:
            address = int(cell_info["address"], 16)
            value = list(str(int(cell_info["value"], 16)))
            WorkingCPU.memory.write(address=address, data=value)
        response = "OK", 200
    except Exception as e:
        response = HttpResponseServerError("Internal Server Error", 500)
    
    return HttpResponse(response)
