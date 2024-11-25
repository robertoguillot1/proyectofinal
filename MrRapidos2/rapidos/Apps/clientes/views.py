from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Count
from Apps.clientes.models import Cliente
from Apps.clientes.serializers import ClienteSerializer

# List and create clients
class ClienteList(ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

# Show, update, and delete a specific client
class ClienteDetail(RetrieveUpdateDestroyAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

# Advanced search: clients with the number of orders
class ClienteConOrdenesView(APIView):
    def get(self, request, *args, **kwargs):
        # Annotate clients with the count of their orders
        clientes = Cliente.objects.annotate(num_ordenes=Count('orden'))
        serializer = ClienteSerializer(clientes, many=True)
        return Response(serializer.data)
