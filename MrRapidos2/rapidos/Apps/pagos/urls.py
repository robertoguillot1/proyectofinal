from django.urls import path  
# Import the path function to define URL patterns.

from Apps.pagos.views import PagoList, PagoDetail  
# Import the PagoList and PagoDetail views from the pagos app.

app_name = "pagos"  
# Define the namespace for the app, useful for organizing URLs in larger projects.

urlpatterns = [  
    # Define the list of URL patterns for the pagos app.
    path('', PagoList.as_view(), name="list"),  
    # Route the root URL of this app ('') to the PagoList view, and name it "list".

    path('<int:pk>/', PagoDetail.as_view(), name="detail"),  
    # Route a URL with an integer parameter (primary key) to the PagoDetail view, and name it "detail".
    # The trailing slash ("/") at the end is important for URL resolution.
]
