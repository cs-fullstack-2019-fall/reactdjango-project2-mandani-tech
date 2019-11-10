from django.db import models

# Create your models here.


class UserModel(models.Model):
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=100)
    userAttack = models.IntegerField(default=20)
    userHealth = models.IntegerField(default=100)
    userAvatar = models.CharField(max_length=300, null=True)
    itemEquipped = models.BooleanField(default=False)

    def __str__(self):
        return self.username


class MonsterModel(models.Model):
    monsterName = models.CharField(max_length=150)
    monsterAttack = models.IntegerField(default=10)
    monsterHealth = models.IntegerField(default=100)
    monsterForeignKey = models.ForeignKey(UserModel, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.monsterName


class WeaponModel(models.Model):
    weaponName = models.CharField(max_length=100,unique=True)
    weaponAttack = models.IntegerField()
    weaponForeignKey = models.ForeignKey(UserModel, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.weaponName
