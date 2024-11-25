import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Makes the service available globally throughout the application
})
export class ReportesService {
  private baseUrl = 'http://localhost:8000';  // Base URL for the API, change if the backend runs on a different port

  constructor(private http: HttpClient) {}  // HttpClient is injected to make HTTP requests

  // Method to get clients with the number of orders
  getClientesConOrdenes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/clientes/con-ordenes/`);  // Makes a GET request to retrieve clients with their order counts
  }

  // Method to get employees with the number of services performed
  getEmpleadosConServicios(): Observable<any> {
    return this.http.get(`${this.baseUrl}/empleados/con-servicios/`);  // Makes a GET request to retrieve employees with their service counts
  }
}
