# Generated by Django 2.0.6 on 2019-11-12 04:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gameApp', '0011_auto_20191111_2111'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usermodel',
            name='userAttack',
            field=models.IntegerField(default=43),
        ),
        migrations.AlterField(
            model_name='usermodel',
            name='userHealth',
            field=models.IntegerField(default=194),
        ),
    ]
