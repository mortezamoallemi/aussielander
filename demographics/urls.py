from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('demographics/population/', views.population_view, name='population_view'), 
]