import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteI } from '../models/ClienteI';

@Injectable({
  providedIn: 'root'  // This makes the service available throughout the application
})
export class ClienteService {
  api_uri_django = 'http://localhost:8000';  // Base URL for the Django API
  base_path = `${this.api_uri_django}/clientes/`;  // Path to access the 'clientes' resource in the API

  constructor(
    private http: HttpClient  // HttpClient is injected to make HTTP requests
  ) { }

  // Method to get all clients from the API
  getAllCliente(): Observable<ClienteI[]> {
    return this.http
      .get<ClienteI[]>(this.base_path);  // Makes a GET request to retrieve all clients
  }

  // Method to get a single client by ID from the API
  getOneCliente(id: number): Observable<ClienteI> {
    return this.http
      .get<ClienteI>(`${this.base_path}${id}`);  // Makes a GET request to retrieve a specific client by ID
  }

  // Method to create a new client via a POST request
  createCliente(data: any): Observable<ClienteI> {
    return this.http.post<ClienteI>(this.base_path, data);  // Sends a POST request with the client data to create a new client
  }

  // Method to update an existing client by ID
  updateCliente(id: number, data: any): Observable<ClienteI> {
    return this.http.put<ClienteI>(`${this.base_path}${id}`, data);  // Sends a PUT request to update the client data by ID
  }

  // Method to delete a client by ID
  deleteCliente(id: number): Observable<ClienteI> {
    return this.http.delete<ClienteI>(`${this.base_path}${id}`);  // Sends a DELETE request to remove the client by ID
  }
}
