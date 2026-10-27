from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
MyUser = get_user_model()

class MyUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = MyUser
        fields = ('id', 'first_name', 'last_name', 'email', 'password', 'is_active', 'role', 'department')

    def create(self, validated_data):
        password = validated_data['password']
        validated_data.pop('password')
        user = MyUser.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token["first_name"] = user.first_name
        token["last_name"] = user.last_name
        token["email"] = user.email
        token["is_active"] = user.is_active
        token["role"] = user.role
        token["department"] = user.department

        return token

    def validate(self, attrs):
        data = super().validate(attrs)

        # Add custom response data

        data["user"] = {
            "id": self.user.id,
            "first_name": self.user.first_name,
            "last_name": self.user.last_name,
            "email": self.user.email,
            "is_active": self.user.is_active,
            "role": self.user.role,
            "department": self.user.department,
        }

        return data
    