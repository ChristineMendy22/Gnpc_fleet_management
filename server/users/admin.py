from django.contrib import admin
from .models import MyUser

# Register your models here.
    

@admin.register(MyUser)
class MyUserAdmin(admin.ModelAdmin):
    # Controls which fields appear as columns in the list view
    list_display = ('first_name', 'last_name', 'email', 'is_active', 'role', 'department')
    # Adds a sidebar filter panel for quick sorting
    list_filter = ('is_active', 'is_staff', 'is_admin', 'role', 'department')
    # Enables a search bar targeting specific fields
    search_fields = ('first_name', 'last_name', 'email')

    fieldsets = (
        ('Account Information', {'fields': ('first_name', 'last_name', 'email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_admin', 'role', 'department')}),
    )

    add_fieldsets = (
        ('Create New User', {
            'classes': ('wide',),
            'fields': ('first_name', 'last_name', 'email', 'password1', 'password2', 'is_active', 'is_staff', 'is_admin', 'role', 'department'),
        }),
    )
    
           