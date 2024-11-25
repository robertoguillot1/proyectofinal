export interface OrdenI {
  id?: number; // Optional: Unique identifier for the order (used when editing an existing order)
  id_cliente: number; // The ID of the customer associated with the order
  id_empleado: number; // The ID of the employee handling the order
  fecha_orden: string; // The date when the order was placed
  estado: string; // The current status of the order (e.g., 'Pending', 'Completed', 'Cancelled')
  total: number; // The total amount for the order
}
