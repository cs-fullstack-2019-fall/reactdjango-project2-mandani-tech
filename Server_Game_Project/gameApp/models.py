from django.db import models
from random import seed, randint
from random import random
# Create your models here.


class UserModel(models.Model):
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=100)
    userAttack = models.IntegerField(default=(randint(15,45))) # randomly generates attack
    userHealth = models.IntegerField(default=(randint(100,300))) # randomly generates health power
    userAvatar = models.CharField(max_length=300, null=True)
    itemEquipped = models.BooleanField(default=False)

    def __str__(self):
        return self.username



class MonsterModel(models.Model):
    monsterName = models.CharField(max_length=150)
    monsterAttack = models.IntegerField(default=10)
    monsterHealth = models.IntegerField(default=100)
    monsterAvatar = models.CharField(max_length=300, null=True)
    monsterForeignKey = models.ForeignKey(UserModel, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.monsterName


class WeaponModel(models.Model):
    weaponName = models.CharField(max_length=100,unique=True)
    weaponAttack = models.IntegerField()
    weaponAvatar = models.CharField(max_length=300, null=True)
    weaponForeignKey = models.ForeignKey(UserModel, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.weaponName
