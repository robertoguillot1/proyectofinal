from django.urls import path
from Apps.pagos.views import PagoList, PagoDetail

app_name = "pagos"

urlpatterns = [
    path('', PagoList.as_view(), name="list"),
    path('<int:pk>/', PagoDetail.as_view(), name="detail"),  # Barra al final
]
