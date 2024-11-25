from django.urls import path  
# Import the path function from Django to define URL patterns.

from Apps.productos.views import ProductoList, ProductoDetail  
# Import the ProductoList and ProductoDetail views from the productos app.

app_name = "productos"  
# Define the namespace for this app's URLs. This helps in reverse URL lookups and organizing URL names in the project.

urlpatterns = [  
    # Define the list of URL patterns for the productos app.

    path('', ProductoList.as_view(), name="list"),  
    # Route the root URL of this app ('') to the ProductoList view. This view will handle listing all products.
    # The URL is named "list" for reference in templates and views.

    path('<int:pk>/', ProductoDetail.as_view(), name="detail"),  
    # Route URLs with an integer parameter (primary key) to the ProductoDetail view. 
    # This view will handle retrieving, updating, or deleting a product by its primary key (pk).
    # The URL is named "detail" for reference in templates and views.
    # The trailing slash ("/") at the end is important to ensure the URL matches correctly.
]
