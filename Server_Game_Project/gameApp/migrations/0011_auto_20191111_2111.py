# Generated by Django 2.0.6 on 2019-11-11 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gameApp', '0010_auto_20191111_1901'),
    ]

    operations = [
        migrations.AddField(
            model_name='monstermodel',
            name='monsterAvatar',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='weaponmodel',
            name='weaponAvatar',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='usermodel',
            name='userAttack',
            field=models.IntegerField(default=25),
        ),
        migrations.AlterField(
            model_name='usermodel',
            name='userHealth',
            field=models.IntegerField(default=223),
        ),
    ]