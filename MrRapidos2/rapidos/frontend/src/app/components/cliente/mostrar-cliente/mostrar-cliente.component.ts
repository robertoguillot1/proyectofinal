import { Component, OnInit } from '@angular/core';
import { ClienteI } from '../../../models/ClienteI';  // Import the ClienteI interface for typing
import { Router } from '@angular/router';  // Import Router to navigate between routes
import { RouterModule } from '@angular/router';  // Import RouterModule to enable routing in the module
import { TableModule } from 'primeng/table';  // Import PrimeNG TableModule for table UI components
import { ButtonModule } from 'primeng/button';  // Import ButtonModule for button UI components
import { CardModule } from 'primeng/card';  // Import CardModule for card UI components
import { ClienteService } from '../../../services/cliente.service';  // Import the ClienteService for client-related API calls

@Component({
  selector: 'app-mostrar-cliente',  // The selector for the component
  standalone: true,  // Marks the component as standalone, no need for an additional module
  imports: [TableModule, ButtonModule, CardModule, RouterModule],  // Import necessary modules for the component
  templateUrl: './mostrar-cliente.component.html',  // Path to the template HTML file
  styleUrl: './mostrar-cliente.component.css'  // Path to the component's CSS file
})
export class MostrarClienteComponent implements OnInit {
  public clientes: ClienteI[] = []  // Array to store the list of clients

  constructor(
    private clienteService: ClienteService,  // Inject ClienteService to interact with the API
    private router: Router  // Inject Router to handle route navigation
  ) { }

  // Lifecycle hook that runs on component initialization
  ngOnInit(): void {
    this.mostrarClientes();  // Calls mostrarClientes method to fetch and display clients
  }

  // Method to get all clients from the API
  mostrarClientes() {
    this.clienteService.getAllCliente()  // Calls the service to get the list of clients
      .subscribe({
        next: (data) => {
          this.clientes = data;  // Assigns the fetched data to the clientes array
          // console.log(this.clientes);  // Optional: Uncomment for debugging
        }
      });
  }

  // Method to delete a client by ID
  eliminar(id: number): void {
    this.router.navigateByUrl('/clientes');  // Navigates to the /clientes route (likely a list view)
    this.clienteService.deleteCliente(id).subscribe(
      () => {
        // Optional: Uncomment to show a success message when the client is deleted
        // this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Cliente Eliminado', life:5000});
        this.mostrarClientes();  // Refresh the client list after deletion
      },
      err => {
        console.log('error');  // Logs any error that occurs during the deletion
        this.router.navigateByUrl('/clientes');  // Navigates back to the /clientes route on error
      }
    );
  }
}
