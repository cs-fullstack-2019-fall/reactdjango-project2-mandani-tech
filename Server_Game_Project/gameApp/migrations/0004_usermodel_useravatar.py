# Generated by Django 2.0.6 on 2019-11-10 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gameApp', '0003_auto_20191110_2230'),
    ]

    operations = [
        migrations.AddField(
            model_name='usermodel',
            name='userAvatar',
            field=models.CharField(max_length=300, null=True),
        ),
    ]