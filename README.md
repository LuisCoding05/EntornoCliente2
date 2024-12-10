# EntornoCliente2

Ejercicio Nuevo: Gestión de Inventario con Eventos Delegados y JSON
Crea una aplicación que permita gestionar un inventario de productos en una tabla interactiva. Debe cumplir los siguientes requisitos:

Requisitos del ejercicio:
Formulario de entrada:

Permite añadir nuevos productos al inventario.
Campos:
Nombre del producto.
Cantidad.
Precio unitario.
Tabla dinámica:

Muestra todos los productos en una tabla.
Cada fila incluye:
Nombre del producto.
Cantidad.
Precio unitario.
Total (cantidad * precio).
Botones para editar y eliminar.
Botones de acción:

Editar: Permite modificar los datos del producto.
Eliminar: Elimina el producto de la tabla.
Eventos delegados:

Usa un único manejador de eventos en el contenedor de la tabla para gestionar las acciones de los botones.
Persistencia:

Al actualizar la página, los datos deben recuperarse automáticamente de localStorage.
Objetivos adicionales:
Validar que no se puedan agregar productos con campos vacíos o negativos.
Mostrar un resumen total (suma de todos los subtotales) en un área debajo de la tabla.


Pistas:
Añadir producto:

Usa un array para almacenar los productos.
Cada producto puede representarse como un objeto:

{ nombre: 'Manzanas', cantidad: 10, precio: 1.50 }
Actualizar tabla:

Usa funciones para generar filas dinámicamente.
Calcula el total de cada producto usando cantidad * precio.
Eventos delegados:

Escucha los clics en los botones de acción (Editar y Eliminar) desde el contenedor de la tabla.
Persistencia con localStorage:

Guarda el array de productos como JSON en localStorage.
Recupera los datos al cargar la página y actualiza la tabla automáticamente.