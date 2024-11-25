from django.contrib import admin  
# Import the admin module from Django to manage the admin interface.

from django.urls import path, include  
# Import the path and include functions from Django to define URL patterns.

urlpatterns = [  
    # Define the list of URL patterns for the project.

    path('admin/', admin.site.urls),  
    # Route the '/admin/' URL to the Django admin site.

    # Routes for each app in the project.
    path('clientes/', include('Apps.clientes.urls')),  
    # Include the URL patterns from the "clientes" app for the '/clientes/' path.

    path('empleados/', include('Apps.empleados.urls')),  
    # Include the URL patterns from the "empleados" app for the '/empleados/' path.

    path('ordenes/', include('Apps.ordenes.urls')),  
    # Include the URL patterns from the "ordenes" app for the '/ordenes/' path.

    path('detallesOrdenes/', include('Apps.detallesOrdenes.urls')),  
    # Include the URL patterns from the "detallesOrdenes" app for the '/detallesOrdenes/' path.

    path('pagos/', include('Apps.pagos.urls')),  
    # Include the URL patterns from the "pagos" app for the '/pagos/' path.

    path('productos/', include('Apps.productos.urls')),  
    # Include the URL patterns from the "productos" app for the '/productos/' path.
]
