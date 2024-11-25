from django.contrib import admin  # Import the Django admin module to manage models in the admin interface.
from Apps.ordenes.models import Orden  # Import the Orden model from the ordenes app.

@admin.register(Orden)  # Register the Orden model with the Django admin site using a decorator.
class OrdenAdmin(admin.ModelAdmin):  # Define a custom admin class for the Orden model.
    list_display = ('id', 'id_cliente', 'id_empleado', 'fecha_orden', 'estado', 'total')  
    # Specify the fields to display in the admin list view for the Orden model.

    search_fields = ('estado', 'id_cliente', 'id_empleado')  
    # Enable search functionality in the admin list view based on these fields.
