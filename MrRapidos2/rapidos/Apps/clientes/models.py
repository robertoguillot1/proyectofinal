from django.db import models

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=250)
    telefono = models.CharField(max_length=20)
    email = models.EmailField(unique=True)  

    def __str__(self):
        return self.nombre
