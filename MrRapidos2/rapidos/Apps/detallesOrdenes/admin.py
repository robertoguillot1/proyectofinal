from django.contrib import admin

# Register your models here.
from django.contrib import admin
from Apps.detallesOrdenes.models import DetallesOrdenes

class DetallesOrdenesAdmin(admin.ModelAdmin):
    list_display = ('id_orden', 'id_producto', 'cantidad', 'precio_unitario')
    search_fields = ('id_orden__id', 'id_producto__nombre')
    list_filter = ('id_orden', 'id_producto')

admin.site.register(DetallesOrdenes, DetallesOrdenesAdmin)
