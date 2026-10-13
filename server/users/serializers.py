from rest_framework import serializers
from django.contrib.auth import get_user_model
MyUser = get_user_model()

class MyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ('id', 'first_name', 'last_name', 'email')