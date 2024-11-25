export interface DetallesOrdenesI {
  id?: number; // Optional: Unique identifier for the order details (used when editing an existing record)
  id_orden: number; // ID of the order this detail belongs to
  id_producto: number; // ID of the product in this order detail
  cantidad: number; // Quantity of the product in the order
  precio_unitario: number; // Unit price of the product in the order
}
