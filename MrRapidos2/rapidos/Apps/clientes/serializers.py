from rest_framework import serializers
from .models import Cliente
from Apps.ordenes.models import Orden

class ClienteSerializer(serializers.ModelSerializer):
    # Campo adicional para contar el número de órdenes
    num_ordenes = serializers.IntegerField(read_only=True)

    class Meta:
        model = Cliente
        fields = ['id', 'nombre', 'direccion', 'telefono', 'email', 'num_ordenes']
