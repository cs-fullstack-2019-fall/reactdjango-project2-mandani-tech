from rest_framework import viewsets
from .models import UserModel, MonsterModel, WeaponModel
from .serializer import UserSerializer, MonsterSerializer, WeaponSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer

class MonsterViewSet(viewsets.ModelViewSet):
    queryset = MonsterModel.objects.all()
    serializer_class = MonsterSerializer
#
class WeaponViewSet(viewsets.ModelViewSet):
    queryset = WeaponModel.objects.all()
    serializer_class = WeaponSerializer
