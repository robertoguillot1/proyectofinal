from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from Apps.detallesOrdenes.models import DetallesOrdenes
from Apps.detallesOrdenes.serializers import DetallesOrdenSerializer

class DetalleOrdenList(ListCreateAPIView):
    queryset = DetallesOrdenes.objects.all()
    serializer_class = DetallesOrdenSerializer

class DetalleOrdenDetail(RetrieveUpdateDestroyAPIView):
    queryset = DetallesOrdenes.objects.all()
    serializer_class = DetallesOrdenSerializer
