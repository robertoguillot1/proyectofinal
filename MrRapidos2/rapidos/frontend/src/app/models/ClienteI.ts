export interface ClienteI {
    id?: number; // Optional: Unique identifier for the client (used when editing an existing client)
    nombre: string; // Name of the client
    direccion: string; // Address of the client
    telefono: string; // Phone number of the client
    email: string; // Email address of the client
  }
  