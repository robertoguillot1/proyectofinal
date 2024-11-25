export interface PagoI {
  id?: number; // Optional: Unique identifier for the payment (used when editing an existing payment)
  id_orden: number; // The ID of the order associated with the payment
  metodo_pago: string; // The payment method used (e.g., 'Nequi', 'Daviplata', 'Cash', 'Credit Card')
  fecha_pago: string; // The date when the payment was made
  valor_pago: number; // The amount paid
}
