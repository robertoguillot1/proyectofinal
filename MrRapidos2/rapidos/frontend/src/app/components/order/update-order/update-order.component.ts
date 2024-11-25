import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenI } from '../../../models/orden';
import { OrdenService } from '../../../services/orden.service'; // Servicio para órdenes
import { ClienteService } from '../../../services/cliente.service'; // Servicio para clientes
import { EmpleadoService } from '../../../services/empleado.service'; // Servicio para empleados
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
  form!: FormGroup; // Formulario reactivo
  orderId!: number; // ID de la orden a actualizar
  clientes: any[] = []; // Lista de clientes
  empleados: any[] = []; // Lista de empleados
  estados: string[] = ['Pending', 'Completed', 'Cancelled']; // Estados posibles de la orden

  constructor(
    private fb: FormBuilder,
    private ordenService: OrdenService,
    private clienteService: ClienteService,
    private empleadoService: EmpleadoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadData();
    this.loadOrder();
  }

  /**
   * Inicializar el formulario reactivo
   */
  private initializeForm(): void {
    this.form = this.fb.group({
      id_cliente: ['', [Validators.required]],
      id_empleado: ['', [Validators.required]],
      fecha_orden: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      total: [0, [Validators.required, Validators.min(0)]],
    });
  }

  /**
   * Cargar datos iniciales como clientes y empleados
   */
  private loadData(): void {
    this.clienteService.getAllCliente().subscribe((clientes) => {
      this.clientes = clientes.map((cliente) => ({
        label: cliente.nombre,
        value: cliente.id,
      }));
    });

    this.empleadoService.getAllEmpleados().subscribe((empleados) => {
      this.empleados = empleados.map((empleado) => ({
        label: empleado.nombre,
        value: empleado.id,
      }));
    });
  }

  /**
   * Cargar la información de la orden
   */
  private loadOrder(): void {
    this.orderId = this.route.snapshot.params['id'];
    this.ordenService.getOrdenById(this.orderId).subscribe((orden: OrdenI) => {
      this.form.patchValue(orden); // Cargar datos de la orden en el formulario
    });
  }

  /**
   * Manejar el envío del formulario
   */
  onSubmit(): void {
    if (this.form.valid) {
      this.ordenService.updateOrden(this.orderId, this.form.value).subscribe({
        next: () => {
          alert('Order updated successfully!');
          this.router.navigate(['/orders']); // Redirigir al listado de órdenes
        },
        error: (err) => {
          console.error('Error updating order:', err);
        },
      });
    }
  }

  /**
   * Cancelar la actualización y volver al listado
   */
  cancel(): void {
    this.router.navigate(['/orders']);
  }
}
