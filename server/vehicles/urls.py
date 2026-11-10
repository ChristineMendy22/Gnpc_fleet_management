from django.urls import path
from vehicles.views import VehicleListCreateView

urlpatterns = [
    path('', view=VehicleListCreateView.as_view(), name='vehicles')
]