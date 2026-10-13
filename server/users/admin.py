from django.contrib import admin
from .models import MyUser

# Register your models here.
    

@admin.register(MyUser)
class MyUserAdmin(admin.ModelAdmin):
    # Controls which fields appear as columns in the list view
    list_display = ('first_name', 'last_name', 'email', 'is_active')
    # Adds a sidebar filter panel for quick sorting
    list_filter = ('is_active', 'is_staff', 'is_admin')
    # Enables a search bar targeting specific fields
    search_fields = ('first_name', 'last_name', 'email')
