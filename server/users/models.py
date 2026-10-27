from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
    
        user = self.model(
            email=self.normalize_email(email),
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields): 
        user = self.create_user(email, password, **extra_fields)
        user.is_admin = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class MyUser(AbstractBaseUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('supervisor', 'Supervisor'),
        ('driver', 'Driver'),
    )

    DEPARTMENT_CHOICES = (
        ('operations', 'Operations'),
        ('iT', 'IT'),
        ('hr', 'HR'),
        ('accounting', 'Accounting'),
        ('audit', 'Audit'),
    )

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    role = models.CharField(max_length=30, choices=ROLE_CHOICES, default='driver')
    department = models.CharField(max_length=30, choices=DEPARTMENT_CHOICES, default='operations')
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True


    


