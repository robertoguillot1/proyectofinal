from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from Apps.productos.models import Producto
from Apps.productos.serializers import ProductoSerializer

class ProductoList(ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ProductoDetail(RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
