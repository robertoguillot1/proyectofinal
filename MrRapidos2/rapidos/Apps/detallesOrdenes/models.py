from django.db import models
from Apps.ordenes.models import Orden
from Apps.productos.models import Producto

class DetallesOrdenes(models.Model):
    # Foreign key relationship with Orden model (one order can have multiple details)
    id_orden = models.ForeignKey(Orden, on_delete=models.CASCADE)
    # Foreign key relationship with Producto model (each detail refers to a specific product)
    id_producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    # Quantity of the product in the order
    cantidad = models.IntegerField()
    # Unit price of the product
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        # This method returns a string representation of the order detail, combining order and product information
        return f"Detalle Orden {self.id_orden} - Producto {self.id_producto}"
