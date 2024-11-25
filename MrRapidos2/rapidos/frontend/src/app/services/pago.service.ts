import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagoI } from '../models/pago';

@Injectable({
  providedIn: 'root',
})
export class PagoService {
  private baseUrl = 'http://127.0.0.1:8000/pagos/'; // Base URL for API

  constructor(private http: HttpClient) {}

  getAllPagos(): Observable<PagoI[]> {
    return this.http.get<PagoI[]>(this.baseUrl);
  }

  getPagoById(id: number): Observable<PagoI> {
    return this.http.get<PagoI>(`${this.baseUrl}${id}/`);
  }

  createPago(pago: PagoI): Observable<PagoI> {
    return this.http.post<PagoI>(this.baseUrl, pago);
  }

  updatePago(id: number, pago: PagoI): Observable<PagoI> {
    return this.http.put<PagoI>(`${this.baseUrl}${id}/`, pago);
  }
  

  deletePago(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
}
