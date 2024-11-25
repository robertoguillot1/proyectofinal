import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';
import { ClienteI } from '../../../models/ClienteI';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, CardModule, InputTextModule, InputGroupModule],
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css'],
})
export class CrearClienteComponent implements OnInit {
  public form: FormGroup;  // FormGroup instance to handle the form

  constructor(
    private formBuilder: FormBuilder,  // Form builder to create the form group
    private clienteService: ClienteService,  // Service to interact with the API for client data
    private router: Router  // Router for navigation after form submission
  ) {
    // Initialize the form with fields and validation rules
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],  // Client's name, required
      direccion: ['', [Validators.required]],  // Client's address, required
      telefono: ['', [Validators.required]],  // Client's phone, required
      email: ['', [Validators.required, Validators.email]],  // Client's email, required and validated as email format
    });
  }

  ngOnInit(): void {}

  // Submit the form
  onSubmit(): void {
    if (this.form.invalid) {  // If form is invalid, show an alert
      alert('Please fill in all fields correctly.');
      return;
    }

    const cliente: ClienteI = this.form.value;  // Get form data and map to ClienteI model

    // Call service to create the client
    this.clienteService.createCliente(cliente).subscribe({
      next: () => {  // On success
        alert('Client created successfully.');
        this.router.navigateByUrl('/clientes');  // Navigate to the clients page
      },
      error: (err) => {  // On error
        console.error('Error creating client:', err);
        alert('An error occurred while creating the client.');
      },
    });
  }

  // Cancel and navigate back to the clients page
  cancel(): void {
    this.router.navigateByUrl('/clientes');
  }

  // Getters for form validation to use in the HTML template
  get nombre() { return this.form.get('nombre'); }
  get direccion() { return this.form.get('direccion'); }
  get telefono() { return this.form.get('telefono'); }
  get email() { return this.form.get('email'); }
}
