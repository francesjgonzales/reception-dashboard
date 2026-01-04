from django.urls import path, include
from . import views
from django.contrib import admin

urlpatterns = [
    path('', views.dashboard_home, name='dashboard_home'),
    path('admin/login/', admin.site.index, name='admin'),
    path('frontend', include('frontend.urls'))
]