import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdenI } from '../models/orden';

@Injectable({
  providedIn: 'root',  // Makes this service available globally throughout the application
})
export class OrdenService {
  api_uri_django = 'http://localhost:8000';  // Base URL for the API
  base_path = `${this.api_uri_django}/ordenes/`;  // Path for accessing the "ordenes" resource in the API

  constructor(private http: HttpClient) {}  // HttpClient is injected to make HTTP requests

  /**
   * Method to get all orders from the API
   */
  getAllOrdenes(): Observable<OrdenI[]> {
    return this.http.get<OrdenI[]>(this.base_path);  // Makes a GET request to fetch all orders
  }

  /**
   * Method to get a single order by its ID from the API
   */
  getOrdenById(id: number): Observable<OrdenI> {
    return this.http.get<OrdenI>(`${this.base_path}${id}/`);  // Makes a GET request to fetch a specific order by ID
  }

  /**
   * Method to create a new order by sending data through a POST request
   */
  createOrden(data: OrdenI): Observable<OrdenI> {
    return this.http.post<OrdenI>(this.base_path, data);  // Sends a POST request to create a new order with the provided data
  }

  /**
   * Method to update an existing order by ID through a PUT request
   */
  updateOrden(id: number, data: OrdenI): Observable<OrdenI> {
    return this.http.put<OrdenI>(`${this.base_path}${id}/`, data);  // Sends a PUT request to update an order with the provided ID and data
  }

  /**
   * Method to delete an order by ID
   */
  deleteOrden(id: number): Observable<any> {
    return this.http.delete(`${this.base_path}${id}/`);  // Sends a DELETE request to remove an order by ID
  }
}
