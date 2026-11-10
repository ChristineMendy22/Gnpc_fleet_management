from django.shortcuts import render
from .models import Vehicle
from .serializers import VehicleSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from permissions import IsAdminUser
# Create your views here.


class VehicleListCreateView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    def get(self, request):
        try:
            vehicles = Vehicle.objects.all()
        except Vehicle.DoesNotExist:
            return Response(serializer.data, status=status.HTTP_404_NOT_FOUND)
        serializer = VehicleSerializer(vehicles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = VehicleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
