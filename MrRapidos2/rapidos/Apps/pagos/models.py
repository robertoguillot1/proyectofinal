from django.db import models  
# Import Django's models module to define database models.

from Apps.ordenes.models import Orden  
# Import the Orden model to establish a relationship between Pago and Orden.

class Pago(models.Model):  
    # Define the Pago model, representing payment information in the database.

    id_orden = models.ForeignKey(Orden, on_delete=models.CASCADE)  
    # Create a foreign key relationship to the Orden model. 
    # If an Orden is deleted, related Pago records are also deleted (`on_delete=models.CASCADE`).

    metodo_pago = models.CharField(  
        max_length=50,  
        choices=[  
            # Define the payment method as a string field with predefined options.
            ('Nequi', 'Nequi'),  
            ('Daviplata', 'Daviplata'),  
            ('Efectivo', 'Efectivo'),  
            ('Tarjeta de crédito', 'Tarjeta de crédito'),  
            ('Tarjeta de débito', 'Tarjeta de débito'),  
        ]  
    )

    fecha_pago = models.DateTimeField()  
    # Define a field to store the date and time of the payment.

    valor_pago = models.DecimalField(max_digits=10, decimal_places=2)  
    # Define a field to store the payment amount with up to 10 digits and 2 decimal places.

    def __str__(self):  
        # Define the string representation for an instance of Pago.
        return f"Pago {self.id} - {self.metodo_pago}"  
        # Returns a readable string showing the payment ID and method.

