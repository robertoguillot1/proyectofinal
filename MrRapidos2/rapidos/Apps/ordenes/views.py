from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from Apps.ordenes.models import Orden
from Apps.ordenes.serializers import OrdenSerializer

# View to list and create orders
class OrdenList(ListCreateAPIView):
    queryset = Orden.objects.all()  # Get all orders from the database
    serializer_class = OrdenSerializer  # Use the OrdenSerializer to format the response

# View to retrieve, update, or delete a specific order
class OrdenDetail(RetrieveUpdateDestroyAPIView):
    queryset = Orden.objects.all()  # Get all orders from the database
    serializer_class = OrdenSerializer  # Use the OrdenSerializer for the order data
