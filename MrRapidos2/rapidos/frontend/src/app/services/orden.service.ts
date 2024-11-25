import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdenI } from '../models/orden';

@Injectable({
  providedIn: 'root',
})
export class OrdenService {
  api_uri_django = 'http://localhost:8000'; // Base URL for the API
  base_path = `${this.api_uri_django}/ordenes/`; // Specific path for "ordenes"

  constructor(private http: HttpClient) {}

  /**
   * Get all orders
   */
  getAllOrdenes(): Observable<OrdenI[]> {
    return this.http.get<OrdenI[]>(this.base_path);
  }

  /**
   * Get a single order by ID
   */
  getOrdenById(id: number): Observable<OrdenI> {
    return this.http.get<OrdenI>(`${this.base_path}${id}/`);
  }

  /**
   * Create a new order
   */
  createOrden(data: OrdenI): Observable<OrdenI> {
    return this.http.post<OrdenI>(this.base_path, data);
  }

  /**
   * Update an existing order
   */
  updateOrden(id: number, data: OrdenI): Observable<OrdenI> {
    return this.http.put<OrdenI>(`${this.base_path}${id}/`, data);
  }

  /**
   * Delete an order by ID
   */
  deleteOrden(id: number): Observable<any> {
    return this.http.delete(`${this.base_path}${id}/`);
  }
}

