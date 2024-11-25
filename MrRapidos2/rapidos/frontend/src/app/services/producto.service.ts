import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/producto';

@Injectable({
  providedIn: 'root',  // Makes the service available globally throughout the application
})
export class ProductoService {
  private baseUrl = 'http://127.0.0.1:8000/productos/';  // Base URL for the 'productos' API

  constructor(private http: HttpClient) {}  // HttpClient is injected to make HTTP requests

  // Method to fetch all products from the API
  getAllProductos(): Observable<ProductoI[]> {
    return this.http.get<ProductoI[]>(this.baseUrl);  // Makes a GET request to retrieve all products
  }

  // Method to fetch a specific product by its ID from the API
  getProductoById(id: number): Observable<ProductoI> {
    return this.http.get<ProductoI>(`${this.baseUrl}${id}/`);  // Makes a GET request to retrieve a product by ID
  }

  // Method to create a new product by sending data through a POST request
  createProducto(producto: ProductoI): Observable<ProductoI> {
    return this.http.post<ProductoI>(this.baseUrl, producto);  // Sends a POST request with the new product data
  }

  // Method to update an existing product by ID through a PUT request
  updateProducto(id: number, producto: ProductoI): Observable<ProductoI> {
    return this.http.put<ProductoI>(`${this.baseUrl}${id}/`, producto);  // Sends a PUT request to update an existing product by ID
  }

  // Method to delete a product by ID
  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);  // Sends a DELETE request to remove a product by ID
  }
}
