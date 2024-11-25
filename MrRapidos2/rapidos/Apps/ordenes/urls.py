from django.urls import path
from Apps.ordenes.views import OrdenList, OrdenDetail

app_name = "ordenes"

urlpatterns = [
    path('', OrdenList.as_view(), name="list"),
    path('<int:pk>/', OrdenDetail.as_view(), name="detail"),  # Agregar "/" al final
]
