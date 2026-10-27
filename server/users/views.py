from django.shortcuts import render
# from django.http import HttpResponse
# Import Response
from rest_framework.response import Response
from rest_framework import status
# from .models import MyUser
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import MyUserSerializer
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from users.serializers import MyTokenObtainPairSerializer
from permissions import IsAdminUser
MyUser = get_user_model()

# Create your views here.


# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def get_users(request):
#     users = MyUser.objects.all()
#     serializer = MyUserSerializer(users, many=True)
#     return Response(serializer.data, status=status.HTTP_200_OK)

class UserListCreateView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get(self, request):
        users = MyUser.objects.all()
        serializer = MyUserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = MyUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Login view using JWT
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
