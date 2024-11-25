from django.contrib import admin
from Apps.clientes.models import Cliente

# Register the Cliente model in the Django admin
@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    # Configure the columns that will be displayed in the client list view
    list_display = ('id', 'nombre', 'direccion', 'telefono', 'email')
    
    # Enable search functionality to search by name and email
    search_fields = ('nombre', 'email')
    
    # Add sidebar filters to improve search experience
    list_filter = ('direccion',)  # You can add more fields if needed
    
    # Allow certain fields to be edited directly from the list view
    list_editable = ('telefono', 'direccion')  # Editable fields directly in the list view
