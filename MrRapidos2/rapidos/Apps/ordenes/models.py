from django.db import models
from Apps.clientes.models import Cliente  # Import Cliente model
from Apps.empleados.models import Empleado  # Import Empleado model

class Orden(models.Model):
    # Foreign key to Cliente: represents the customer for this order
    id_cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    
    # Foreign key to Empleado: represents the employee who processed the order
    id_empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE)
    
    # Date and time when the order was placed
    fecha_orden = models.DateTimeField()
    
    # State or status of the order (e.g., 'pending', 'completed')
    estado = models.CharField(max_length=50)
    
    # Total amount for the order
    total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        # String representation of the order, showing order ID and customer
        return f"Orden {self.id} - {self.id_cliente}"
