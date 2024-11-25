from django.urls import path
from Apps.clientes.views import ClienteList, ClienteDetail, ClienteConOrdenesView

app_name = "clientes"

urlpatterns = [
    path('', ClienteList.as_view(), name="list"),
    path('<int:pk>', ClienteDetail.as_view(), name="detail"),
    # Nueva ruta para la consulta avanzada
    path('con-ordenes/', ClienteConOrdenesView.as_view(), name="con_ordenes"),
]
