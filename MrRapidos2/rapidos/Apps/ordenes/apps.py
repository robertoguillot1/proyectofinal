from django.apps import AppConfig  # Import the AppConfig class to define configuration for a Django app.

class OrdenesConfig(AppConfig):  # Define a configuration class for the "ordenes" app.
    default_auto_field = 'django.db.models.BigAutoField'  
    # Set the default field type for auto-generated primary keys to BigAutoField (a 64-bit integer).

    name = 'Apps.ordenes'  
    # Specify the full Python path for the application, used by Django to identify it.
