export interface EmpleadoI {
  id?: number; // Optional: Unique identifier for the employee (used when editing an existing employee)
  nombre: string; // Name of the employee
  telefono: string; // Phone number of the employee
  email: string; // Email address of the employee
  direccion: string; // Address of the employee
  rol: string; // Role of the employee (e.g., Manager, Sales, etc.)
}
