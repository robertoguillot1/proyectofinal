import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para funcionalidades básicas como pipes
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ReportesService } from '../../services/reportes.service'; // Importación del servicio

@Component({
  selector: 'app-reportes',
  standalone: true,
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
  imports: [
    CommonModule, // Para pipes como currency y date
    RouterModule, // Para navegación
    TableModule, // Para PrimeNG Table
    ButtonModule, // Para botones
    CardModule // Para PrimeNG Card
  ]
})
export class ReportesComponent implements OnInit {
  clientes: any[] = []; // Lista de clientes con órdenes
  empleados: any[] = []; // Lista de empleados con servicios
  isLoading: boolean = true; // Indicador de carga
  hasError: boolean = false; // Indicador de error

  constructor(private reportesService: ReportesService) {}

  ngOnInit(): void {
    this.loadReportes();
  }

  /**
   * Método para cargar los datos de clientes y empleados.
   */
  loadReportes(): void {
    this.isLoading = true;
    this.hasError = false;

    // Ejecutar las dos solicitudes simultáneamente
    Promise.all([
      this.reportesService.getClientesConOrdenes().toPromise(),
      this.reportesService.getEmpleadosConServicios().toPromise()
    ])
      .then(([clientesData, empleadosData]) => {
        this.clientes = clientesData;
        this.empleados = empleadosData;
      })
      .catch(error => {
        console.error('Error al cargar reportes:', error);
        this.hasError = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
