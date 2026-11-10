from django.urls import path
from vehicles.views import (
    VehicleListCreateView,
    VehicleDetailView
)


urlpatterns = [
    path('', view=VehicleListCreateView.as_view(), name='vehicles'),
    path('<int:pk>/', VehicleDetailView.as_view(), name='vehicles-detail'),

]