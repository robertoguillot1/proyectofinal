from django.urls import path
from Apps.ordenes.views import OrdenList, OrdenDetail

app_name = "ordenes"

urlpatterns = [
    # URL pattern for listing all orders and creating a new order
    path('', OrdenList.as_view(), name="list"),
    
    # URL pattern for retrieving, updating, or deleting a specific order by its ID
    path('<int:pk>/', OrdenDetail.as_view(), name="detail"),  # Add "/" at the end to follow URL convention
]
