from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView  
# Import the generic views from Django Rest Framework (DRF) for listing, creating, retrieving, updating, and deleting objects.

from Apps.productos.models import Producto  
# Import the Producto model from the productos app to interact with its data.

from Apps.productos.serializers import ProductoSerializer  
# Import the ProductoSerializer to handle the serialization and deserialization of Producto instances.

class ProductoList(ListCreateAPIView):  
    # Define a view to list all Producto instances or create a new one.
    queryset = Producto.objects.all()  
    # Specify the queryset to retrieve all Producto objects from the database.
    serializer_class = ProductoSerializer  
    # Specify the serializer class to format the data and validate input for the Producto model.

class ProductoDetail(RetrieveUpdateDestroyAPIView):  
    # Define a view to retrieve, update, or delete a specific Producto instance.
    queryset = Producto.objects.all()  
    # Specify the queryset to retrieve all Producto objects (filtered by primary key for detail view).
    serializer_class = ProductoSerializer  
    # Use the ProductoSerializer for serializing and deserializing data for this model.
