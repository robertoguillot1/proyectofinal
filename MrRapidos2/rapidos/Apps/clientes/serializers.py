from rest_framework import serializers
from .models import Cliente
from Apps.ordenes.models import Orden

# Serializer for the Cliente model
class ClienteSerializer(serializers.ModelSerializer):
    # Add a field to show the number of orders for each client
    num_ordenes = serializers.IntegerField(read_only=True)

    class Meta:
        model = Cliente
        fields = ['id', 'nombre', 'direccion', 'telefono', 'email', 'num_ordenes']
