from django.urls import path
from Apps.empleados.views import EmpleadoList, EmpleadoDetail, EmpleadoConServiciosView

app_name = "empleados"

urlpatterns = [
    # Route for listing all employees or creating a new employee
    path('', EmpleadoList.as_view(), name="list"),
    
    # Route for retrieving, updating, or deleting a specific employee by their ID
    path('<int:pk>/', EmpleadoDetail.as_view(), name="detail"),
    
    # Route for getting employees with the count of services they've performed
    path('con-servicios/', EmpleadoConServiciosView.as_view(), name="con_servicios"),
]
