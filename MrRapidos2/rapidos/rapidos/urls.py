from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Rutas de las aplicaciones
    path('clientes/', include('Apps.clientes.urls')),
    path('empleados/', include('Apps.empleados.urls')),
    path('ordenes/', include('Apps.ordenes.urls')),
    path('detallesOrdenes/', include('Apps.detallesOrdenes.urls')),
    path('pagos/', include('Apps.pagos.urls')),
    path('productos/', include('Apps.productos.urls')),
]
