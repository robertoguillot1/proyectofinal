import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private baseUrl = 'http://127.0.0.1:8000/productos/'; // Base URL for API

  constructor(private http: HttpClient) {}

  getAllProductos(): Observable<ProductoI[]> {
    return this.http.get<ProductoI[]>(this.baseUrl);
  }

  getProductoById(id: number): Observable<ProductoI> {
    return this.http.get<ProductoI>(`${this.baseUrl}${id}/`);
  }

  createProducto(producto: ProductoI): Observable<ProductoI> {
    return this.http.post<ProductoI>(this.baseUrl, producto);
  }

  updateProducto(id: number, producto: ProductoI): Observable<ProductoI> {
    return this.http.put<ProductoI>(`${this.baseUrl}${id}/`, producto);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
}
