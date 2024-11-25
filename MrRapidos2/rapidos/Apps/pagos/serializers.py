from rest_framework import serializers  
# Import the serializers module from Django Rest Framework (DRF) to handle data serialization.

from .models import Pago  
# Import the Pago model from the current app's models.

class PagoSerializer(serializers.ModelSerializer):  
    # Define a serializer class for the Pago model, inheriting from DRF's ModelSerializer.
    
    class Meta:  
        # Meta class defines additional settings for the serializer.
        model = Pago  
        # Specify the model to serialize, in this case, the Pago model.
        fields = '__all__'  
        # Automatically include all fields from the Pago model in the serializer.
