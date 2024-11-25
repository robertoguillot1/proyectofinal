import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadoI } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private baseUrl = 'http://127.0.0.1:8000/empleados/'; // Base URL for API

  constructor(private http: HttpClient) {}

  // Get all employees
  getAllEmpleados(): Observable<EmpleadoI[]> {
    return this.http.get<EmpleadoI[]>(this.baseUrl);
  }

  // Get a specific employee by ID
  getEmpleadoById(id: number): Observable<EmpleadoI> {
    return this.http.get<EmpleadoI>(`${this.baseUrl}${id}/`);
  }

  // Create a new employee
  createEmpleado(empleado: EmpleadoI): Observable<EmpleadoI> {
    return this.http.post<EmpleadoI>(this.baseUrl, empleado);
  }

  // Update an existing employee
  updateEmpleado(id: number, empleado: EmpleadoI): Observable<EmpleadoI> {
    return this.http.put<EmpleadoI>(`${this.baseUrl}${id}/`, empleado);
  }

  // Delete an employee by ID
  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
}
