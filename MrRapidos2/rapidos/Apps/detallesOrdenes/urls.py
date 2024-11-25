from django.urls import path
from Apps.detallesOrdenes.views import DetalleOrdenList, DetalleOrdenDetail

app_name = "detallesOrdenes"

urlpatterns = [
    path('', DetalleOrdenList.as_view(), name="list"),
    path('<int:pk>/', DetalleOrdenDetail.as_view(), name="detail"),  # Agregar "/" al final
]
