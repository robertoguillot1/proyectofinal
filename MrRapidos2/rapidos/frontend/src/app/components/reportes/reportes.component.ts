import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // For basic functionalities like pipes
import { RouterModule } from '@angular/router'; // For navigation
import { TableModule } from 'primeng/table'; // For PrimeNG Table component
import { ButtonModule } from 'primeng/button'; // For PrimeNG Button component
import { CardModule } from 'primeng/card'; // For PrimeNG Card component
import { ReportesService } from '../../services/reportes.service'; // Import the service for reports

@Component({
  selector: 'app-reportes',
  standalone: true,
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
  imports: [
    CommonModule, // For pipes like currency and date
    RouterModule, // For navigation
    TableModule, // For displaying tables
    ButtonModule, // For button components
    CardModule // For card components
  ]
})
export class ReportesComponent implements OnInit {
  clientes: any[] = []; // List of clients with orders
  empleados: any[] = []; // List of employees with services
  isLoading: boolean = true; // Indicator for loading state
  hasError: boolean = false; // Indicator for error state

  constructor(private reportesService: ReportesService) {}

  ngOnInit(): void {
    this.loadReportes(); // Call method to load report data on component initialization
  }

  /**
   * Method to load client and employee data.
   */
  loadReportes(): void {
    this.isLoading = true; // Set loading state to true
    this.hasError = false; // Reset error state

    // Execute both requests simultaneously using Promise.all
    Promise.all([
      this.reportesService.getClientesConOrdenes().toPromise(), // Get clients with orders
      this.reportesService.getEmpleadosConServicios().toPromise() // Get employees with services
    ])
      .then(([clientesData, empleadosData]) => {
        this.clientes = clientesData; // Set the fetched clients data
        this.empleados = empleadosData; // Set the fetched employees data
      })
      .catch(error => {
        console.error('Error al cargar reportes:', error); // Log any error that occurs during the requests
        this.hasError = true; // Set error state to true if an error occurs
      })
      .finally(() => {
        this.isLoading = false; // Set loading state to false after the requests finish
      });
  }
}
