from django.db import models

# Create your models here.
class Empleado(models.Model):
    nombre = models.CharField(max_length=100)
    telefono = models.CharField(max_length=20)
    email = models.EmailField(max_length=100)
    direccion = models.CharField(max_length=255)
    rol = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre
