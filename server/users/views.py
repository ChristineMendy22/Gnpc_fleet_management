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

MyUser = get_user_model()

# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_users(request):
    users = MyUser.objects.all()
    serializer = MyUserSerializer(users, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
