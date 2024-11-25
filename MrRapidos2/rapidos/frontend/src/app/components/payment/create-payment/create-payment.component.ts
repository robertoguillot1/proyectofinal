import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagoI } from '../../../models/pago'; // Payment interface
import { PagoService } from '../../../services/pago.service'; // Payment service
import { OrdenService } from '../../../services/orden.service'; // Order service
import { OrdenI } from '../../../models/orden'; // Order interface
import { ToastModule } from 'primeng/toast'; // Toast notifications
import { MessageService } from 'primeng/api'; // PrimeNG Message Service
import { CardModule } from 'primeng/card'; // Card layout
import { ButtonModule } from 'primeng/button'; // Buttons
import { DropdownModule } from 'primeng/dropdown'; // Dropdown for orders and payment methods
import { CalendarModule } from 'primeng/calendar'; // Calendar for payment date
import { InputNumberModule } from 'primeng/inputnumber'; // Input for payment amount

@Component({
  selector: 'app-create-payment',
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
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {
  public form: FormGroup;
  public ordenes: OrdenI[] = [];
  public metodosPago = [
    { label: 'Nequi', value: 'Nequi' },
    { label: 'Daviplata', value: 'Daviplata' },
    { label: 'Efectivo', value: 'Efectivo' },
    { label: 'Tarjeta de crédito', value: 'Tarjeta de crédito' },
    { label: 'Tarjeta de débito', value: 'Tarjeta de débito' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private pagoService: PagoService,
    private ordenService: OrdenService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      id_orden: [null, [Validators.required]],
      metodo_pago: [null, [Validators.required]],
      fecha_pago: [null, [Validators.required]],
      valor_pago: [null, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.fetchOrdenes();
  }

  /**
   * Fetches all orders to populate the dropdown
   */
  fetchOrdenes(): void {
    this.ordenService.getAllOrdenes().subscribe({
      next: (data) => {
        this.ordenes = data;
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
      }
    });
  }

  /**
   * Handles form submission to create a new payment
   */
  onSubmit(): void {
    const formValue = this.form.value;
    const pago: PagoI = {
      id_orden: typeof formValue.id_orden === 'object' ? formValue.id_orden.id : formValue.id_orden,
      metodo_pago: formValue.metodo_pago?.value || formValue.metodo_pago, // Aquí extraemos el valor
      fecha_pago: formValue.fecha_pago instanceof Date ? formValue.fecha_pago.toISOString().split('T')[0] : formValue.fecha_pago,
      valor_pago: formValue.valor_pago
    };
  
    this.pagoService.createPago(pago).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Payment created successfully!' });
        this.router.navigate(['/payments']);
      },
      error: (err) => {
        console.error('Error creating payment:', err);
        const serverError = err.error;
        this.messageService.add({ 
          severity: 'error', 
          summary: 'Error', 
          detail: serverError?.metodo_pago?.[0] || 'Failed to create payment.' 
        });
      }
    });
  }
  

  /**
   * Cancels form submission and navigates back
   */
  onCancel(): void {
    this.router.navigate(['/payments']);
  }
}
