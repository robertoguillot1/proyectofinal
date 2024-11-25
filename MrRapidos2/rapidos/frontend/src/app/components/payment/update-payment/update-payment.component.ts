import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PagoI } from '../../../models/pago';
import { PagoService } from '../../../services/pago.service';
import { OrdenService } from '../../../services/orden.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-payment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    InputGroupModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.css'],
})
export class UpdatePaymentComponent implements OnInit {
  form!: FormGroup;
  paymentId!: number;
  ordenes: any[] = [];
  metodosPago = [
    { label: 'Nequi', value: 'Nequi' },
    { label: 'Daviplata', value: 'Daviplata' },
    { label: 'Efectivo', value: 'Efectivo' },
    { label: 'Tarjeta de crédito', value: 'Tarjeta de crédito' },
    { label: 'Tarjeta de débito', value: 'Tarjeta de débito' },
  ];

  constructor(
    private fb: FormBuilder,
    private pagoService: PagoService,
    private ordenService: OrdenService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadOrders();
    this.loadPaymentData();
  }

  /**
   * Initialize the form with validators
   */
  private initializeForm(): void {
    this.form = this.fb.group({
      id_orden: [null, [Validators.required]],
      metodo_pago: [null, [Validators.required]],
      fecha_pago: [null, [Validators.required]],
      valor_pago: [null, [Validators.required, Validators.min(0)]],
    });
  }

  /**
   * Load orders to populate the dropdown
   */
  private loadOrders(): void {
    this.ordenService.getAllOrdenes().subscribe({
      next: (data) => {
        this.ordenes = data.map((orden) => ({
          id: orden.id,
          label: `Order #${orden.id} - ${orden.fecha_orden}`,
        }));
      },
      error: (err) => {
        console.error('Error loading orders:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load orders.',
        });
      },
    });
  }

  /**
   * Load payment data to edit
   */
  private loadPaymentData(): void {
    this.paymentId = this.route.snapshot.params['id'];
    this.pagoService.getPagoById(this.paymentId).subscribe({
      next: (payment: PagoI) => {
        const selectedOrder = this.ordenes.find((o) => o.id === payment.id_orden) || null;
        const selectedMethod = this.metodosPago.find((m) => m.value === payment.metodo_pago) || null;

        this.form.patchValue({
          id_orden: selectedOrder?.id || payment.id_orden,
          metodo_pago: selectedMethod?.value || payment.metodo_pago,
          fecha_pago: new Date(payment.fecha_pago),
          valor_pago: payment.valor_pago,
        });
      },
      error: (err) => {
        console.error('Error loading payment:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load payment data.',
        });
      },
    });
  }

  /**
   * Submit the form to update the payment
   */
  onSubmit(): void {
    if (this.form.valid) {
      this.pagoService.updatePago(this.paymentId, this.form.value).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Payment updated successfully!',
          });
          this.router.navigate(['/payments']);
        },
        error: (err) => {
          console.error('Error updating payment:', err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to update payment.',
          });
        },
      });
    }
  }

  /**
   * Cancel editing and navigate back
   */
  cancel(): void {
    this.router.navigate(['/payments']);
  }
}
