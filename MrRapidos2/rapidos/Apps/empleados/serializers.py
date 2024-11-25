from rest_framework import serializers
from .models import Empleado

class EmpleadoSerializer(serializers.ModelSerializer):
    # Additional field for the number of services performed by the employee
    num_servicios = serializers.IntegerField(read_only=True)

    class Meta:
        model = Empleado
        fields = '__all__'  # Includes all fields of the model and the additional `num_servicios` field
