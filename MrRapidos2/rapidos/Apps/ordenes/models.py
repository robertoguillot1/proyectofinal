from django.db import models
from Apps.clientes.models import Cliente
from Apps.empleados.models import Empleado

class Orden(models.Model):
    id_cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    id_empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE)
    fecha_orden = models.DateTimeField()
    estado = models.CharField(max_length=50)
    total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Orden {self.id} - {self.id_cliente}"
