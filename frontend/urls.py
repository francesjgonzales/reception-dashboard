from django.urls import path, re_path
from . import views

urlpatterns = [
    # Catch ALL routes and send them to React
    path("", views.index),
]
