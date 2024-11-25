Proyecto de Gestión entregas a domicilio
Este proyecto es una API de gestión de entregas a domicilio que permite manejar clientes, empleados, pagos, ordenes y productos. Está construido utilizando Django, angular 19. como ORM para interactuar con una base de datos MySQL.

Estructura del Proyecto
Modelos: Se han creado modelos para representar las entidades del sistema:

Cliente: Contiene información sobre los clientes.
productos: Información general de los productos de las tiendas.
pagos: Detalles sobre los pagos.
Empleado: Relación entre empleados y sus trabajos.
ordenes: Información sobre las ordenes.

Controladores: Se han implementado controladores para manejar la lógica de negocio de las entidades mencionadas anteriormente. Cada controlador tiene métodos para:

Crear nuevos registros.
Obtener todos los registros o un registro específico.
Actualizar registros existentes.
Eliminar registros.
Rutas: Se han definido rutas para cada controlador, permitiendo el acceso a las funciones de la API a través de solicitudes HTTP.
