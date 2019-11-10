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
    path('get_user_models/',views.get_user_models,name='get_user'),
    path('userProfile/<int:id>',views.userprofile,name ='userProfile')

    ]
