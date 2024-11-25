import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenI } from '../../../models/orden';
import { OrdenService } from '../../../services/orden.service'; // Service for orders
import { ClienteService } from '../../../services/cliente.service'; // Service for clients
import { EmpleadoService } from '../../../services/empleado.service'; // Service for employees
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-update-order',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
  ],
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css'],
})
export class UpdateOrderComponent implements OnInit {
  form!: FormGroup; // Reactive form
  orderId!: number; // ID of the order to update
  clientes: any[] = []; // List of clients
  empleados: any[] = []; // List of employees
  estados: string[] = ['Pending', 'Completed', 'Cancelled']; // Possible order statuses

  constructor(
    private fb: FormBuilder,  // Form builder for reactive forms
    private ordenService: OrdenService,  // Service to handle orders
    private clienteService: ClienteService,  // Service to fetch clients
    private empleadoService: EmpleadoService,  // Service to fetch employees
    private route: ActivatedRoute,  // To access the route params
    private router: Router  // To navigate between views
  ) {}

  ngOnInit(): void {
    this.initializeForm();  // Initialize the form
    this.loadData();  // Load client and employee data
    this.loadOrder();  // Load the existing order data
  }

  // Initialize the reactive form with necessary validation
  private initializeForm(): void {
    this.form = this.fb.group({
      id_cliente: ['', [Validators.required]],  // Client selection (required)
      id_empleado: ['', [Validators.required]],  // Employee selection (required)
      fecha_orden: ['', [Validators.required]],  // Order date (required)
      estado: ['', [Validators.required]],  // Order status (required)
      total: [0, [Validators.required, Validators.min(0)]],  // Order total (required, minimum 0)
    });
  }

  // Load initial data (clients and employees)
  private loadData(): void {
    this.clienteService.getAllCliente().subscribe((clientes) => {
      this.clientes = clientes.map((cliente) => ({
        label: cliente.nombre,  // Display name of the client
        value: cliente.id,  // Client's ID
      }));
    });

    this.empleadoService.getAllEmpleados().subscribe((empleados) => {
      this.empleados = empleados.map((empleado) => ({
        label: empleado.nombre,  // Display name of the employee
        value: empleado.id,  // Employee's ID
      }));
    });
  }

  // Load the existing order data based on the order ID from the URL
  private loadOrder(): void {
    this.orderId = this.route.snapshot.params['id'];  // Extract order ID from URL
    this.ordenService.getOrdenById(this.orderId).subscribe((orden: OrdenI) => {
      this.form.patchValue(orden);  // Populate form with the order data
    });
  }

  // Handle the form submission
  onSubmit(): void {
    if (this.form.valid) {
      this.ordenService.updateOrden(this.orderId, this.form.value).subscribe({
        next: () => {
          alert('Order updated successfully!');
          this.router.navigate(['/orders']);  // Redirect to orders list
        },
        error: (err) => {
          console.error('Error updating order:', err);  // Log error
        },
      });
    }
  }

  // Handle cancel action and navigate back to orders list
  cancel(): void {
    this.router.navigate(['/orders']);
  }
}
