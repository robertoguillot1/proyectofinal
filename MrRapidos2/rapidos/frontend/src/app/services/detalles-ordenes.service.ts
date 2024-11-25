import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetallesOrdenesI } from '../models/detalles-Ordenes';

@Injectable({
  providedIn: 'root',  // Makes this service available globally throughout the application
})
export class DetallesOrdenesService {
  private baseUrl = 'http://localhost:8000/detallesOrdenes/';  // Base URL for the 'detallesOrdenes' API

  constructor(private http: HttpClient) {}  // HttpClient is injected to make HTTP requests

  // Method to fetch all order details from the API
  getAllDetallesOrdenes(): Observable<DetallesOrdenesI[]> {
    return this.http.get<DetallesOrdenesI[]>(this.baseUrl);  // Makes a GET request to retrieve all order details
  }

  // Method to fetch a single order detail by ID from the API
  getDetallesOrdenById(id: number): Observable<DetallesOrdenesI> {
    return this.http.get<DetallesOrdenesI>(`${this.baseUrl}${id}/`);  // Makes a GET request to retrieve an order detail by its ID
  }

  // Method to create a new order detail by sending data through a POST request
  createDetallesOrden(detalle: DetallesOrdenesI): Observable<DetallesOrdenesI> {
    return this.http.post<DetallesOrdenesI>(this.baseUrl, detalle);  // Sends a POST request with the new order detail data
  }

  // Method to update an existing order detail by ID through a PUT request
  updateDetallesOrden(id: number, detalle: DetallesOrdenesI): Observable<DetallesOrdenesI> {
    return this.http.put<DetallesOrdenesI>(`${this.baseUrl}${id}/`, detalle);  // Sends a PUT request to update an existing order detail by ID
  }

  // Method to delete an order detail by ID
  deleteDetallesOrden(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);  // Sends a DELETE request to remove an order detail by ID
  }
}
