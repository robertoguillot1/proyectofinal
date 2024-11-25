from django.contrib import admin
from Apps.empleados.models import Empleado

# Registro del modelo Empleado en el administrador
@admin.register(Empleado)
class EmpleadoAdmin(admin.ModelAdmin):
    # Configura las columnas que se mostrarán en la lista de empleados
    list_display = ('id', 'nombre', 'telefono', 'direccion', 'rol')
    # Habilita un campo de búsqueda para facilitar la búsqueda por nombre y rol
    search_fields = ('nombre', 'rol')
    # Agrega filtros laterales para roles y direcciones
    list_filter = ('rol', 'direccion')  # Puedes agregar más filtros si es necesario
    # Habilita que ciertos campos sean editables directamente desde la lista
    list_editable = ('telefono', 'direccion', 'rol')