from django.urls import path
from Apps.detallesOrdenes.views import DetalleOrdenList, DetalleOrdenDetail

app_name = "detallesOrdenes"

urlpatterns = [
    path('', DetalleOrdenList.as_view(), name="list"),  # URL for listing all DetallesOrdenes
    path('<int:pk>/', DetalleOrdenDetail.as_view(), name="detail"),  # URL for retrieving, updating, or deleting a specific DetallesOrdenes
]
