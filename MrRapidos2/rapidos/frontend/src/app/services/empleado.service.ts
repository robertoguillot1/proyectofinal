import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadoI } from '../models/empleado';

@Injectable({
  providedIn: 'root',  // Makes the service available globally throughout the application
})
export class EmpleadoService {
  private baseUrl = 'http://127.0.0.1:8000/empleados/';  // Base URL for the 'empleados' API

  constructor(private http: HttpClient) {}  // HttpClient is injected to make HTTP requests

  // Method to fetch all employees from the API
  getAllEmpleados(): Observable<EmpleadoI[]> {
    return this.http.get<EmpleadoI[]>(this.baseUrl);  // Makes a GET request to retrieve all employees
  }

  // Method to fetch a specific employee by ID from the API
  getEmpleadoById(id: number): Observable<EmpleadoI> {
    return this.http.get<EmpleadoI>(`${this.baseUrl}${id}/`);  // Makes a GET request to retrieve an employee by ID
  }

  // Method to create a new employee by sending data through a POST request
  createEmpleado(empleado: EmpleadoI): Observable<EmpleadoI> {
    return this.http.post<EmpleadoI>(this.baseUrl, empleado);  // Sends a POST request with the new employee data
  }

  // Method to update an existing employee by ID through a PUT request
  updateEmpleado(id: number, empleado: EmpleadoI): Observable<EmpleadoI> {
    return this.http.put<EmpleadoI>(`${this.baseUrl}${id}/`, empleado);  // Sends a PUT request to update an employee by ID
  }

  // Method to delete an employee by ID
  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);  // Sends a DELETE request to remove an employee by ID
  }
}
