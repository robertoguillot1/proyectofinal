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
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, CardModule,InputTextModule,InputGroupModule,],
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css'],
})
export class CrearClienteComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.invalid) {
      alert('Por favor completa todos los campos correctamente.');
      return;
    }

    const cliente: ClienteI = this.form.value;

    this.clienteService.createCliente(cliente).subscribe({
      next: () => {
        alert('Cliente creado exitosamente.');
        this.router.navigateByUrl('/clientes');
      },
      error: (err) => {
        console.error('Error al crear cliente:', err);
        alert('Ocurrió un error al crear el cliente.');
      },
    });
  }

  cancel(): void {
    this.router.navigateByUrl('/clientes');
  }

  // Getters para facilitar la validación en el HTML
  get nombre() { return this.form.get('nombre'); }
  get direccion() { return this.form.get('direccion'); }
  get telefono() { return this.form.get('telefono'); }
  get email() { return this.form.get('email'); }
}

