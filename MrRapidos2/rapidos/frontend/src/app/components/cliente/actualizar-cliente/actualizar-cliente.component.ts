import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteI } from '../../../models/ClienteI'; // Interface for the Client data model
import { ClienteService } from '../../../services/cliente.service'; // Service to manage client data
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-actualizar-cliente', // Component selector
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, CardModule,InputTextModule,InputGroupModule,],
  templateUrl: './actualizar-cliente.component.html', // Link to HTML template
  styleUrls: ['./actualizar-cliente.component.css'], // Link to CSS styles
})
export class ActualizarClienteComponent implements OnInit {
  form!: FormGroup; // Form to handle client data
  clienteId!: number; // Stores the client ID to be updated

  constructor(
    private fb: FormBuilder, // FormBuilder for reactive forms
    private clienteService: ClienteService, // Service to fetch/update client data
    private route: ActivatedRoute, // To retrieve route parameters
    private router: Router // For navigation after update
  ) {}

  ngOnInit(): void {
    // Initialize the form with default validators
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Only numeric values allowed
      email: ['', [Validators.required, Validators.email]], // Valid email required
    });

    // Get the client ID from the URL and fetch its data
    this.clienteId = this.route.snapshot.params['id'];
    this.clienteService.getOneCliente(this.clienteId).subscribe((cliente: ClienteI) => {
      this.form.patchValue(cliente); // Populate the form with client data
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      // Update the client using the service
      this.clienteService.updateCliente(this.clienteId, this.form.value).subscribe(() => {
        alert('Client updated successfully!');
        this.router.navigate(['/clientes']); // Redirect to client list after success
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/clientes']); // Cancel and return to client list
  }
}
