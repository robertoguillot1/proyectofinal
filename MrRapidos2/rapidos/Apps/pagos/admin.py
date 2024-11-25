from django.contrib import admin
from Apps.pagos.models import Pago

@admin.register(Pago)
class PagoAdmin(admin.ModelAdmin):
    list_display = ('id', 'id_orden', 'metodo_pago', 'fecha_pago', 'valor_pago')
    search_fields = ('metodo_pago',)
