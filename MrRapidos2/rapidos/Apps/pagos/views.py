from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView  
# Import generic views from Django Rest Framework (DRF) for creating, listing, retrieving, updating, and deleting objects.

from Apps.pagos.models import Pago  
# Import the Pago model from the pagos app to use its data.

from Apps.pagos.serializers import PagoSerializer  
# Import the PagoSerializer to handle data serialization and deserialization for the Pago model.

class PagoList(ListCreateAPIView):  
    # Define a view for listing all Pago instances or creating a new one.
    queryset = Pago.objects.all()  
    # Specify the queryset to retrieve all Pago objects from the database.
    serializer_class = PagoSerializer  
    # Specify the serializer to format the data and validate input.

class PagoDetail(RetrieveUpdateDestroyAPIView):  
    # Define a view for retrieving, updating, or deleting a specific Pago instance.
    queryset = Pago.objects.all()  
    # Specify the queryset to retrieve all Pago objects, enabling filtering by ID.
    serializer_class = PagoSerializer  
    # Use the PagoSerializer for data formatting and validation.
