from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from Apps.pagos.models import Pago
from Apps.pagos.serializers import PagoSerializer

class PagoList(ListCreateAPIView):
    queryset = Pago.objects.all()
    serializer_class = PagoSerializer

class PagoDetail(RetrieveUpdateDestroyAPIView):
    queryset = Pago.objects.all()
    serializer_class = PagoSerializer
