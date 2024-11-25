from django.urls import path
from Apps.clientes.views import ClienteList, ClienteDetail, ClienteConOrdenesView

app_name = "clientes"

urlpatterns = [
    # List of all clients
    path('', ClienteList.as_view(), name="list"),
    
    # Detail view for a single client
    path('<int:pk>', ClienteDetail.as_view(), name="detail"),
    
    # New route for the advanced query, clients with orders
    path('con-ordenes/', ClienteConOrdenesView.as_view(), name="con_ordenes"),
]
