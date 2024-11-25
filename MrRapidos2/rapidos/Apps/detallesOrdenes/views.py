from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from Apps.detallesOrdenes.models import DetallesOrdenes
from Apps.detallesOrdenes.serializers import DetallesOrdenSerializer

# API view for listing all DetallesOrdenes or creating a new one
class DetalleOrdenList(ListCreateAPIView):
    queryset = DetallesOrdenes.objects.all()  # Fetches all DetallesOrdenes
    serializer_class = DetallesOrdenSerializer  # Specifies the serializer class to use

# API view for retrieving, updating, or deleting a specific DetallesOrdenes instance
class DetalleOrdenDetail(RetrieveUpdateDestroyAPIView):
    queryset = DetallesOrdenes.objects.all()  # Fetches all DetallesOrdenes
    serializer_class = DetallesOrdenSerializer  # Specifies the serializer class to use
