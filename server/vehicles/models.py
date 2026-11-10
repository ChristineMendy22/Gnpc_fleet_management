from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class Vehicle(models.Model):
    STATUS_CHOICES = (
        ('available', 'Available'),
        ('in_use', 'In Use'),
        ('out_of_service', 'Out of service'),
        ('maintenance', 'Maintenance'),
    )
    model_name = models.CharField(max_length=100)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='available')
    assigned_to = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='vehicles')
    mileage = models.FloatField(default=0.0)

    def __str__(self):
        return f"{self.model_name}"