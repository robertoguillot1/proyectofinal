from django.db import models
from Apps.ordenes.models import Orden
from Apps.productos.models import Producto

class DetallesOrdenes(models.Model):
    id_orden = models.ForeignKey(Orden, on_delete=models.CASCADE)
    id_producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Detalle Orden {self.id_orden} - Producto {self.id_producto}"