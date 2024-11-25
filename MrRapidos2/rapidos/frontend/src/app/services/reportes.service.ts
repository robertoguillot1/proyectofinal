import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  private baseUrl = 'http://localhost:8000'; // Cambia esto si tu backend corre en otro puerto

  constructor(private http: HttpClient) {}

  // Obtiene clientes con el número de órdenes
  getClientesConOrdenes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/clientes/con-ordenes/`);
  }

  // Obtiene empleados con el número de servicios realizados
  getEmpleadosConServicios(): Observable<any> {
    return this.http.get(`${this.baseUrl}/empleados/con-servicios/`);
  }
}
