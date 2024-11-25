from django.apps import AppConfig

# Configuration for the Clientes app
class ClientesConfig(AppConfig):
    # The default auto field type for primary keys
    default_auto_field = 'django.db.models.BigAutoField'
    
    # The name of the app, used by Django to identify it
    name = 'Apps.clientes'
