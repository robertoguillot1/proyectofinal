from rest_framework import serializers
from .models import Orden

class OrdenSerializer(serializers.ModelSerializer):
    class Meta:
        # Define the model to serialize and specify all fields to be included
        model = Orden
        fields = '__all__'  # Include all fields from the Orden model in the serialization
