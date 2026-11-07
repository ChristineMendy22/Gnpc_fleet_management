from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
<<<<<<< HEAD
from users.views import MyTokenObtainPairView, UserListCreateView

=======
>>>>>>> 01bad55066870a37faeceaab5de1df19b9bdd43c
from users.views import (
    MyTokenObtainPairView,
    UserListCreateView,
    UserDetailView,
<<<<<<< HEAD
    LogoutView
)

=======
)
>>>>>>> 01bad55066870a37faeceaab5de1df19b9bdd43c
urlpatterns = [
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
]