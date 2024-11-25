from django.apps import AppConfig  
# Import the AppConfig class from Django to define the configuration for an application.

class ProductosConfig(AppConfig):  
    # Define a configuration class for the "productos" app by subclassing AppConfig.

    default_auto_field = 'django.db.models.BigAutoField'  
    # Set the default type for auto-generated primary key fields to BigAutoField (a 64-bit integer field).
    # This is useful when using a large number of entries in the database.

    name = 'Apps.productos'  
    # Specify the full Python path of the "productos" app. This is used by Django to locate and reference the app.
