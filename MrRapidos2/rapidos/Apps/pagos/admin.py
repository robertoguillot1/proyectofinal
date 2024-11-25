from django.contrib import admin  
# Import the admin module from Django to manage models in the Django admin interface.

from Apps.pagos.models import Pago  
# Import the Pago model from the pagos app to register it in the admin interface.

@admin.register(Pago)  
# Register the Pago model with the Django admin interface using the decorator.

class PagoAdmin(admin.ModelAdmin):  
    # Define a custom admin class for the Pago model that will modify the way it appears in the admin interface.

    list_display = ('id', 'id_orden', 'metodo_pago', 'fecha_pago', 'valor_pago')  
    # Specify the fields to display in the admin list view for Pago instances.

    search_fields = ('metodo_pago',)  
    # Enable search functionality in the admin list view based on the 'metodo_pago' field.
