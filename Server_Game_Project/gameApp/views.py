from .models import UserModel , WeaponModel,MonsterModel
from django.http import HttpResponse, JsonResponse
from .serializer import UserSerializer, WeaponSerializer ,MonsterSerializer
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


def get_weapon_model(request):
    allWeaponModel = WeaponModel.objects.all()
    serializer = WeaponSerializer(allWeaponModel, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_monster_model(request):
    allMonsterModel = MonsterModel.objects.all()
    serializer = MonsterSerializer(allMonsterModel, many=True)
    return JsonResponse(serializer.data, safe=False)



def get_user_model(request, userID):
    allUserModel = UserModel.objects.filter(id=userID)
    serializer = UserSerializer(allUserModel, many=True)
    return JsonResponse(serializer.data, safe=False)
