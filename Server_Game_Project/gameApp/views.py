from .models import UserModel
from django.http import HttpResponse, JsonResponse
from .serializer import UserSerializer
from json import loads

# Create your views here.


def auth_users(request):
    requestBodyInfo = loads(request.body)
    bodyUsername = requestBodyInfo["username"]
    bodyPassword = requestBodyInfo["password"]
    allUsers = UserModel.objects.filter(username=bodyUsername)
    print(allUsers)
    if(allUsers):
        if allUsers[0].password == bodyPassword:
            return HttpResponse(allUsers[0].id)
        else:
            return HttpResponse(False)
    return HttpResponse(False)


def userprofile(request,id):
    allUserModels = UserModel.objects
    serializer = UserSerializer(allUserModels, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_user_models(request, userID):
    allUserModels = UserModel.objects.filter(foreignKey=userID)
    serializer = UserSerializer(allUserModels, many=True)
    return JsonResponse(serializer.data, safe=False)
