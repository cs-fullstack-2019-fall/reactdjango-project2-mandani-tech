from django.urls import include, path
from rest_framework import routers
from . import views
from . import api

router = routers.DefaultRouter()
router.register('user', api.UserViewSet)
router.register('monster', api.MonsterViewSet)
router.register('weapon', api.WeaponViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth_users/', views.auth_users, name='auth_users'),
    path('get_user_model/<int:userID>',views.get_user_model,name='get_user'),
    path('get_weapon_model/',views.get_weapon_model,name ='get_weapon'),
    path('get_monster_model/',views.get_monster_model,name ='get_monster'),

    ]
