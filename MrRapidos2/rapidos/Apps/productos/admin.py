from django.contrib import admin
from Apps.productos.models import Producto

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'descripcion', 'precio_base', 'activo')
    search_fields = ('nombre', 'activo')
