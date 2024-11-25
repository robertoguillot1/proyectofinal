export interface ProductoI {
  id?: number; // Optional: Unique identifier for the product (used when editing an existing product)
  nombre: string; // The name of the product
  descripcion: string; // A brief description of the product
  precio_base: number; // The base price of the product
  activo: boolean; // Indicates whether the product is active or not
}
