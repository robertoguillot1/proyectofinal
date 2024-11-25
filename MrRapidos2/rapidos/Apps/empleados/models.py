from django.db import models

# Define the Employee model
class Empleado(models.Model):
    nombre = models.CharField(max_length=100)  # Name of the employee
    telefono = models.CharField(max_length=20)  # Phone number of the employee
    email = models.EmailField(max_length=100)  # Email address of the employee
    direccion = models.CharField(max_length=255)  # Address of the employee
    rol = models.CharField(max_length=50)  # Role of the employee (e.g., manager, staff, etc.)

    def __str__(self):
        return self.nombre  # Return the name of the employee when the model instance is printed
