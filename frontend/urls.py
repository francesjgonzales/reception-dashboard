from django.urls import path, re_path
from . import views

urlpatterns = [
    # Catch ALL routes and send them to React
    path("", views.index),
    path("dashboard", views.index),
    path("settings", views.index)
]
