import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoI } from '../../../models/empleado'; // Interface for the Employee data model
import { EmpleadoService } from '../../../services/empleado.service'; // Service to manage employee data
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown'; // PrimeNG Dropdown module

@Component({
  selector: 'app-update-employee', // Component selector
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputGroupModule,
    DropdownModule,
  ],
  templateUrl: './update-employee.component.html', // Path to the HTML template
  styleUrls: ['./update-employee.component.css'], // Path to the CSS styles
})
export class UpdateEmployeeComponent implements OnInit {
  form!: FormGroup; // Form to handle employee data
  employeeId!: number; // Stores the employee ID to be updated

  roles = [
    { label: 'Customer Support', value: 'Customer Support' },
    { label: 'Delivery', value: 'Delivery' },
  ]; // Dropdown options for roles

  constructor(
    private fb: FormBuilder, // FormBuilder for reactive forms
    private employeeService: EmpleadoService, // Service to fetch/update employee data
    private route: ActivatedRoute, // To retrieve route parameters
    private router: Router // For navigation after update
  ) {}

  ngOnInit(): void {
    // Initialize the form with default validators
    this.form = this.fb.group({
      nombre: ['', [Validators.required]], // Name is required
      direccion: ['', [Validators.required]], // Address is required
      telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Only numeric values allowed
      email: ['', [Validators.required, Validators.email]], // Valid email required
      rol: ['', [Validators.required]], // Role selection is required
    });

    // Get the employee ID from the URL and fetch its data
    this.employeeId = this.route.snapshot.params['id'];
    this.employeeService.getEmpleadoById(this.employeeId).subscribe((empleado: EmpleadoI) => {
      this.form.patchValue(empleado); // Populate the form with employee data
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      // Update the employee using the service
      this.employeeService.updateEmpleado(this.employeeId, this.form.value).subscribe(() => {
        alert('Employee updated successfully!');
        this.router.navigate(['/employees']); // Redirect to employee list after success
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/employees']); // Cancel and return to employee list
  }
}
