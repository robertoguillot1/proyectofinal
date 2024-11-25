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
  form!: FormGroup; // Define the form group for reactive form
  paymentId!: number; // Payment ID for updating a specific payment
  ordenes: any[] = []; // List of orders to populate the dropdown menu
  metodosPago = [ // List of available payment methods
    { label: 'Nequi', value: 'Nequi' },
    { label: 'Daviplata', value: 'Daviplata' },
    { label: 'Efectivo', value: 'Efectivo' },
    { label: 'Tarjeta de crédito', value: 'Tarjeta de crédito' },
    { label: 'Tarjeta de débito', value: 'Tarjeta de débito' },
  ];

  constructor(
    private fb: FormBuilder, // FormBuilder for creating the reactive form
    private pagoService: PagoService, // Service to interact with payments
    private ordenService: OrdenService, // Service to interact with orders
    private messageService: MessageService, // Service for displaying messages
    private route: ActivatedRoute, // ActivatedRoute to capture the payment ID from the URL
    private router: Router // Router to navigate between views
  ) {}

  ngOnInit(): void {
    this.initializeForm(); // Initialize the form with default values
    this.loadOrders(); // Load the orders to populate the dropdown
    this.loadPaymentData(); // Load the existing payment data for editing
  }

  /**
   * Initialize the form with validators for each field
   */
  private initializeForm(): void {
    this.form = this.fb.group({
      id_orden: [null, [Validators.required]], // Order ID is required
      metodo_pago: [null, [Validators.required]], // Payment method is required
      fecha_pago: [null, [Validators.required]], // Payment date is required
      valor_pago: [null, [Validators.required, Validators.min(0)]], // Payment value must be greater than or equal to 0
    });
  }

  /**
   * Load orders from the service and populate the dropdown list
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
        // Show an error message if orders cannot be loaded
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load orders.',
        });
      },
    });
  }

  /**
   * Load the payment data for the payment ID from the route
   */
  private loadPaymentData(): void {
    this.paymentId = this.route.snapshot.params['id']; // Get the payment ID from the URL
    this.pagoService.getPagoById(this.paymentId).subscribe({
      next: (payment: PagoI) => {
        // Find the order and payment method corresponding to the payment
        const selectedOrder = this.ordenes.find((o) => o.id === payment.id_orden) || null;
        const selectedMethod = this.metodosPago.find((m) => m.value === payment.metodo_pago) || null;

        // Patch the form with the existing payment data
        this.form.patchValue({
          id_orden: selectedOrder?.id || payment.id_orden,
          metodo_pago: selectedMethod?.value || payment.metodo_pago,
          fecha_pago: new Date(payment.fecha_pago), // Convert date to Date object
          valor_pago: payment.valor_pago,
        });
      },
      error: (err) => {
        console.error('Error loading payment:', err);
        // Show an error message if payment data cannot be loaded
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
    if (this.form.valid) { // Check if form is valid
      // Call the service to update the payment
      this.pagoService.updatePago(this.paymentId, this.form.value).subscribe({
        next: () => {
          // Display success message on successful update
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Payment updated successfully!',
          });
          this.router.navigate(['/payments']); // Navigate to the payments list page
        },
        error: (err) => {
          console.error('Error updating payment:', err);
          // Display error message if update fails
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
   * Cancel editing and navigate back to the payments list
   */
  cancel(): void {
    this.router.navigate(['/payments']); // Navigate back to the payments list
  }
}
