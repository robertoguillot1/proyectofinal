from rest_framework import serializers
from .models import Empleado

class EmpleadoSerializer(serializers.ModelSerializer):
    # Campo adicional para el número de servicios realizados por el empleado
    num_servicios = serializers.IntegerField(read_only=True)

    class Meta:
        model = Empleado
        fields = '__all__'  # Incluye todos los campos y el nuevo `num_servicios`
