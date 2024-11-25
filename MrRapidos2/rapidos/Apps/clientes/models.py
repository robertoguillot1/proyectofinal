from django.db import models

# Define the Cliente model for storing client information
class Cliente(models.Model):
    # Client's name
    nombre = models.CharField(max_length=100)
    
    # Client's address
    direccion = models.CharField(max_length=250)
    
    # Client's phone number
    telefono = models.CharField(max_length=20)
    
    # Client's email (unique to avoid duplicates)
    email = models.EmailField(unique=True)  

    # String representation of the Cliente instance (used in admin and other areas)
    def __str__(self):
        return self.nombre
