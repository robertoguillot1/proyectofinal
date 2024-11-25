from django.db import models  
# Import the models module from Django to define database models.

class Producto(models.Model):  
    # Define a model class named Producto, which will represent products in the database.

    nombre = models.CharField(max_length=100)  
    # Define a character field for the product name with a maximum length of 100 characters.

    descripcion = models.TextField()  
    # Define a text field for a detailed description of the product. No length limit.

    precio_base = models.DecimalField(max_digits=10, decimal_places=2)  
    # Define a decimal field for the base price of the product. It can store numbers with up to 10 digits, 
    # including 2 decimal places for accuracy (e.g., 99999999.99).

    activo = models.BooleanField(default=True)  
    # Define a boolean field to mark whether the product is active or not. Defaults to True (active).

    def __str__(self):  
        # Define the string representation of the Producto model. 
        # This is what will be displayed when a Producto instance is printed or represented as a string.
        return self.nombre  
        # Return the product's name when the instance is printed.

