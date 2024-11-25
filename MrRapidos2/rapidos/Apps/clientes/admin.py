
from django.contrib import admin
from Apps.clientes.models import Cliente

# Registro del modelo Cliente en el administrador
@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    # Configura las columnas que se mostrarán en la lista de clientes
    list_display = ('id', 'nombre', 'direccion', 'telefono', 'email')
    # Habilita un campo de búsqueda para facilitar la búsqueda por nombre y correo electrónico
    search_fields = ('nombre', 'email')
    # Agrega filtros laterales para mejorar la experiencia de búsqueda
    list_filter = ('direccion',)  # Puedes agregar más campos si es útil
    # Habilita que ciertos campos sean editables directamente desde la lista
    list_editable = ('telefono', 'direccion')  # Editables en la lista principal
