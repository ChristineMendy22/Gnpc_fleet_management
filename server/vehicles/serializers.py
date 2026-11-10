from rest_framework import serializers
from .models import Vehicle


class VehicleSerializer(serializers.ModelSerializer):
    assigned_to_name = serializers.SerializerMethodField()
    class Meta:
        model = Vehicle
        fields = ['model_name', 'status', 'assigned_to', 'mileage', 'assigned_to_name']
    
    def get_assigned_to_name(self, obj):
        return obj.assigned_to.get_full_name()
