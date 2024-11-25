from rest_framework import serializers  
# Import the serializers module from Django Rest Framework to handle serialization and deserialization of data.

from .models import Producto  
# Import the Producto model from the current directory (i.e., the productos app).

class ProductoSerializer(serializers.ModelSerializer):  
    # Define a serializer class for the Producto model using the ModelSerializer base class.

    class Meta:  
        # Define metadata for the serializer class.

        model = Producto  
        # Specify the model that this serializer will work with (Producto model).

        fields = '__all__'  
        # Include all fields from the Producto model in the serialized data. 
        # This means every field in the Producto model will be serialized.
