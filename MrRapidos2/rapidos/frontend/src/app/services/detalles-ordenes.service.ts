import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetallesOrdenesI } from '../models/detalles-Ordenes';

@Injectable({
  providedIn: 'root',
})
export class DetallesOrdenesService {
  private baseUrl = 'http://127.0.0.1:8000/detallesOrdenes/'; // Base URL for API

  constructor(private http: HttpClient) {}

  getAllDetallesOrdenes(): Observable<DetallesOrdenesI[]> {
    return this.http.get<DetallesOrdenesI[]>(this.baseUrl);
  }

  getDetallesOrdenById(id: number): Observable<DetallesOrdenesI> {
    return this.http.get<DetallesOrdenesI>(`${this.baseUrl}${id}/`);
  }

  createDetallesOrden(detalle: DetallesOrdenesI): Observable<DetallesOrdenesI> {
    return this.http.post<DetallesOrdenesI>(this.baseUrl, detalle);
  }

  updateDetallesOrden(id: number, detalle: DetallesOrdenesI): Observable<DetallesOrdenesI> {
    return this.http.put<DetallesOrdenesI>(`${this.baseUrl}${id}/`, detalle);
  }

  deleteDetallesOrden(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
}
