from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from Apps.ordenes.models import Orden
from Apps.ordenes.serializers import OrdenSerializer

class OrdenList(ListCreateAPIView):
    queryset = Orden.objects.all()
    serializer_class = OrdenSerializer

class OrdenDetail(RetrieveUpdateDestroyAPIView):
    queryset = Orden.objects.all()
    serializer_class = OrdenSerializer
