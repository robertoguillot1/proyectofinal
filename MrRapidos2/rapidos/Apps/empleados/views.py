from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Count
from Apps.empleados.models import Empleado
from Apps.empleados.serializers import EmpleadoSerializer

# List and create view for Empleado
class EmpleadoList(ListCreateAPIView):
    queryset = Empleado.objects.all()  # Query to retrieve all employees
    serializer_class = EmpleadoSerializer  # Serializer to use for employee data

# Retrieve, update, and destroy view for Empleado
class EmpleadoDetail(RetrieveUpdateDestroyAPIView):
    queryset = Empleado.objects.all()  # Query to retrieve a specific employee by ID
    serializer_class = EmpleadoSerializer  # Serializer to use for employee data

# Advanced view: Get employees with the number of services (ordenes) they have performed
class EmpleadoConServiciosView(APIView):
    def get(self, request, *args, **kwargs):
        # Annotate employees with the count of related orders (num_servicios)
        empleados = Empleado.objects.annotate(num_servicios=Count('orden'))
        # Serialize the annotated employee data
        serializer = EmpleadoSerializer(empleados, many=True)
        # Return the serialized data in the response
        return Response(serializer.data)
