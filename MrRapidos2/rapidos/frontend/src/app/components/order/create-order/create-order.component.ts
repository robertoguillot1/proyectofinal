import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdenI } from '../../../models/orden'; // Order interface
import { OrdenService } from '../../../services/orden.service'; // Service to handle API calls for orders
import { ClienteService } from '../../../services/cliente.service'; // Service to fetch clients
import { EmpleadoService } from '../../../services/empleado.service'; // Service to fetch employees
import { ClienteI } from '../../../models/ClienteI'; // Client interface
import { EmpleadoI } from '../../../models/empleado'; // Employee interface
import { ToastModule } from 'primeng/toast'; // Toast notifications
import { MessageService } from 'primeng/api'; // PrimeNG Message Service
import { CardModule } from 'primeng/card'; // Card layout
import { ButtonModule } from 'primeng/button'; // Buttons
import { DropdownModule } from 'primeng/dropdown'; // Dropdown for clients and employees
import { CalendarModule } from 'primeng/calendar'; // Calendar for order date
import { InputNumberModule } from 'primeng/inputnumber'; // Input for total amount

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule
  ],
  providers: [MessageService],
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  // Form group to manage form controls and validation
  public form: FormGroup;

  // Lists to populate dropdown menus for clients and employees
  public clientes: ClienteI[] = [];
  public empleados: EmpleadoI[] = [];

  // List of order states
  public estados = [
    { label: 'Pending', value: 'Pending' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Cancelled', value: 'Cancelled' }
  ];

  constructor(
    private formBuilder: FormBuilder, // For building the form
    private ordenService: OrdenService, // Service for handling order-related API calls
    private clienteService: ClienteService, // Service to fetch clients
    private empleadoService: EmpleadoService, // Service to fetch employees
    private messageService: MessageService, // For displaying success or error messages
    private router: Router // Router for navigation
  ) {
    // Initialize the form with validation rules
    this.form = this.formBuilder.group({
      id_cliente: [null, [Validators.required]], // Client ID is required
      id_empleado: [null, [Validators.required]], // Employee ID is required
      fecha_orden: [null, [Validators.required]], // Order date is required
      estado: [null, [Validators.required]], // Order state is required
      total: [null, [Validators.required, Validators.min(0)]] // Total amount is required and must be positive
    });
  }

  ngOnInit(): void {
    this.fetchClientes(); // Fetch clients to populate the dropdown
    this.fetchEmpleados(); // Fetch employees to populate the dropdown
  }

  /**
   * Fetches the list of clients from the API
   */
  fetchClientes(): void {
    this.clienteService.getAllCliente().subscribe({
      next: (data) => {
        this.clientes = data;
      },
      error: (err) => {
        console.error('Error fetching clients:', err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load clients.' });
      }
    });
  }

  /**
   * Fetches the list of employees from the API
   */
  fetchEmpleados(): void {
    this.empleadoService.getAllEmpleados().subscribe({
      next: (data) => {
        this.empleados = data;
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load employees.' });
      }
    });
  }

  /**
   * Handles form submission to create a new order
   */
  onSubmit(): void {
    const formValue = this.form.value;

    // Send only the IDs of client and employee
    const orden: OrdenI = {
      id_cliente: formValue.id_cliente, // Send only the selected ID
      id_empleado: formValue.id_empleado, // Send only the selected ID
      fecha_orden: formValue.fecha_orden,
      estado: formValue.estado,
      total: formValue.total
    };

    this.ordenService.createOrden(orden).subscribe({
      next: (data) => {
        console.log('Order created successfully', data);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Order created successfully.' });
        this.router.navigate(['/orders']);
      },
      error: (err) => {
        console.error('Error creating order:', err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create the order.' });
      }
    });
  }

  /**
   * Handles form cancellation
   */
  onCancel(): void {
    this.router.navigateByUrl('/orders');
  }
}
