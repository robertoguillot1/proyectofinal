from django.db import models
from Apps.ordenes.models import Orden

class Pago(models.Model):
    id_orden = models.ForeignKey(Orden, on_delete=models.CASCADE)
    metodo_pago = models.CharField(max_length=50, choices=[
        ('Nequi', 'Nequi'),
        ('Daviplata', 'Daviplata'),
        ('Efectivo', 'Efectivo'),
        ('Tarjeta de crédito', 'Tarjeta de crédito'),
        ('Tarjeta de débito', 'Tarjeta de débito'),
    ])
    fecha_pago = models.DateTimeField()
    valor_pago = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Pago {self.id} - {self.metodo_pago}"
