from django.urls import path
from Apps.empleados.views import EmpleadoList, EmpleadoDetail, EmpleadoConServiciosView

app_name = "empleados"

urlpatterns = [
    path('', EmpleadoList.as_view(), name="list"),
    path('<int:pk>/', EmpleadoDetail.as_view(), name="detail"),  # Agregar "/" al final
    path('con-servicios/', EmpleadoConServiciosView.as_view(), name="con_servicios"),
]
