from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
<<<<<<< Updated upstream
from users.views import MyTokenObtainPairView, UserListCreateView

=======
from users.views import (
    MyTokenObtainPairView,
    UserListCreateView,
    UserDetailView,
    LogoutView
)
>>>>>>> Stashed changes
urlpatterns = [
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
]