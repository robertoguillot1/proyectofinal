from django.contrib import admin
from Apps.ordenes.models import Orden

@admin.register(Orden)
class OrdenAdmin(admin.ModelAdmin):
    list_display = ('id', 'id_cliente', 'id_empleado', 'fecha_orden', 'estado', 'total')
    search_fields = ('estado', 'id_cliente', 'id_empleado')
