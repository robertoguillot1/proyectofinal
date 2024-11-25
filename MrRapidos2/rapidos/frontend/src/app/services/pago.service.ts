import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagoI } from '../models/pago';

@Injectable({
  providedIn: 'root',  // Makes the service available globally throughout the application
})
export class PagoService {
  private baseUrl = 'http://127.0.0.1:8000/pagos/';  // Base URL for the 'pagos' API

  constructor(private http: HttpClient) {}  // HttpClient is injected to make HTTP requests

  // Method to fetch all payments from the API
  getAllPagos(): Observable<PagoI[]> {
    return this.http.get<PagoI[]>(this.baseUrl);  // Makes a GET request to retrieve all payments
  }

  // Method to fetch a specific payment by its ID from the API
  getPagoById(id: number): Observable<PagoI> {
    return this.http.get<PagoI>(`${this.baseUrl}${id}/`);  // Makes a GET request to retrieve a payment by ID
  }

  // Method to create a new payment by sending data through a POST request
  createPago(pago: PagoI): Observable<PagoI> {
    return this.http.post<PagoI>(this.baseUrl, pago);  // Sends a POST request with payment data to create a new payment
  }

  // Method to update an existing payment by ID through a PUT request
  updatePago(id: number, pago: PagoI): Observable<PagoI> {
    return this.http.put<PagoI>(`${this.baseUrl}${id}/`, pago);  // Sends a PUT request to update an existing payment by ID
  }

  // Method to delete a payment by ID
  deletePago(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);  // Sends a DELETE request to remove a payment by ID
  }
}
