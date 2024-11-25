from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Count
from Apps.empleados.models import Empleado
from Apps.empleados.serializers import EmpleadoSerializer

class EmpleadoList(ListCreateAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

class EmpleadoDetail(RetrieveUpdateDestroyAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

# Vista avanzada: empleados con número de servicios realizados
class EmpleadoConServiciosView(APIView):
    def get(self, request, *args, **kwargs):
        # Annotar a los empleados con el conteo de órdenes relacionadas
        empleados = Empleado.objects.annotate(num_servicios=Count('orden'))
        serializer = EmpleadoSerializer(empleados, many=True)
        return Response(serializer.data)
