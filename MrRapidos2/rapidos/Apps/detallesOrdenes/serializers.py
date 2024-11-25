from rest_framework import serializers
from .models import DetallesOrdenes

class DetallesOrdenSerializer(serializers.ModelSerializer):
    # Meta class defines the model and the fields to be serialized
    class Meta:
        model = DetallesOrdenes
        fields = '__all__'  # Serializes all fields of the DetallesOrdenes model
