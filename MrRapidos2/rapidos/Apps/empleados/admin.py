from django.contrib import admin
from Apps.empleados.models import Empleado

# Registering the Empleado model in the admin panel
@admin.register(Empleado)
class EmpleadoAdmin(admin.ModelAdmin):
    # Configures the columns to display in the employee list
    list_display = ('id', 'nombre', 'telefono', 'direccion', 'rol')
    # Enables a search field to facilitate searching by name and role
    search_fields = ('nombre', 'rol')
    # Adds filters on the side panel for role and address
    list_filter = ('rol', 'direccion')  # You can add more filters if needed
    # Enables inline editing of certain fields directly in the list
    list_editable = ('telefono', 'direccion', 'rol')
