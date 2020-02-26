from rest_framework import serializers
from .models import UserModel, MonsterModel, WeaponModel


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = "__all__"


class MonsterSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonsterModel
        fields = "__all__"


class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeaponModel
        fields = '__all__'
