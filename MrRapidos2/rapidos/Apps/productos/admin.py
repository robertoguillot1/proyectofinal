from django.contrib import admin  
# Import the admin module from Django to register models and configure the admin interface.

from Apps.productos.models import Producto  
# Import the Producto model from the productos app, so it can be registered in the admin interface.

@admin.register(Producto)  
# Register the Producto model with Django's admin interface using the decorator.
# This will make the Producto model available in the Django admin site.

class ProductoAdmin(admin.ModelAdmin):  
    # Define a custom admin class for Producto. This allows customization of how the model appears in the admin interface.

    list_display = ('id', 'nombre', 'descripcion', 'precio_base', 'activo')  
    # Specify which fields of the Producto model to display in the list view in the admin interface.
    # The fields displayed are: id, nombre (name), descripcion (description), precio_base (base price), and activo (active status).

    search_fields = ('nombre', 'activo')  
    # Specify which fields will be searchable in the admin interface. Here, users can search by "nombre" (name) and "activo" (active status).
