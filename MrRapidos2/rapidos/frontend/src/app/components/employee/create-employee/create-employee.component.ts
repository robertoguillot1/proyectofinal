import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmpleadoI } from '../../../models/empleado'; // Employee interface
import { EmpleadoService } from '../../../services/empleado.service'; // Service to handle API calls
import { ToastModule } from 'primeng/toast'; // Toast messages
import { MessageService } from 'primeng/api'; // PrimeNG Message Service
import { CardModule } from 'primeng/card'; // Card layout
import { ButtonModule } from 'primeng/button'; // Buttons
import { InputTextModule } from 'primeng/inputtext'; // Input fields
import { DropdownModule } from 'primeng/dropdown'; // Dropdown for roles
import { Routes } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    RouterModule
  ],
  providers: [MessageService], // MessageService must be provided for Toast notifications
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // Form group to manage form controls and validation
  public form: FormGroup;

  // List of roles for the dropdown menu
  public roles = [
    { label: 'Atencion al Cliente', value: 'Atencion al Cliente' },
    { label: 'Repartidor', value: 'Repartidor' }
  ];

  constructor(
    private formBuilder: FormBuilder, // For building the form
    private empleadoService: EmpleadoService, // Service for handling API requests
    private messageService: MessageService, // For displaying success or error messages
    private router: Router // Router for navigation
  ) {
    // Initialize the form with validation rules
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Phone number must be 10 digits
      email: ['', [Validators.required, Validators.email]], // Validate email format
      direccion: ['', [Validators.required]],
      rol: ['', [Validators.required]] // Role is required
    });
  }

  ngOnInit(): void {}

  /**
   * Handle form submission to create a new employee
   */
  onSubmit(): void {
    if (this.form.invalid) {
      // Show an error message if the form is invalid
      this.messageService.add({
        severity: 'error',
        summary: 'Form Error',
        detail: 'Please complete all required fields with valid data.'
      });
      return;
    }

    const empleado: EmpleadoI = this.form.value;

    // Call the service to create an employee
    this.empleadoService.createEmpleado(empleado).subscribe({
      next: () => {
        // Show success message
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Employee created successfully.'
        });
        // Navigate back to the employee list
        this.router.navigateByUrl('/employees');
      },
      error: (err) => {
        console.error('Error creating employee:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'An error occurred while creating the employee.'
        });
      }
    });
  }

  /**
   * Handle form cancellation
   */
  onCancel(): void {
    this.router.navigateByUrl('/employees');
  }
}
