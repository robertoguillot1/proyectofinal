from django.apps import AppConfig

# Configuration class for the Empleados app
class EmpleadosConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'  # Use BigAutoField for primary keys by default
    name = 'Apps.empleados'  # The name of the app
