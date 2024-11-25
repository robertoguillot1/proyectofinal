from django.contrib import admin
from Apps.detallesOrdenes.models import DetallesOrdenes

# Customizing the admin interface for the DetallesOrdenes model
class DetallesOrdenesAdmin(admin.ModelAdmin):
    # Display these fields in the admin list view
    list_display = ('id_orden', 'id_producto', 'cantidad', 'precio_unitario')
    # Enable search functionality based on order ID and product name
    search_fields = ('id_orden__id', 'id_producto__nombre')
    # Add filters on the order and product fields
    list_filter = ('id_orden', 'id_producto')

# Register the DetallesOrdenes model with the custom admin configuration
admin.site.register(DetallesOrdenes, DetallesOrdenesAdmin)
