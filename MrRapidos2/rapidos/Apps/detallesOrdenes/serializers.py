from rest_framework import serializers
from .models import DetallesOrdenes

class DetallesOrdenSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetallesOrdenes
        fields = '__all__'
