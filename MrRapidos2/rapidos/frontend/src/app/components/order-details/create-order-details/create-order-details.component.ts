import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DetallesOrdenesService } from '../../../services/detalles-ordenes.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { OrdenI } from '../../../models/orden';
import { ProductoI } from '../../../models/producto';

@Component({
  selector: 'app-create-order-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule, // Agregar módulo para InputNumber
    CheckboxModule, // Agregar módulo para Checkbox
    RouterModule
  ],
  templateUrl: './create-order-details.component.html',
  styleUrls: ['./create-order-details.component.css']
})
export class CreateOrderDetailsComponent {
  // Define the reactive form for creating order details
  orderDetailsForm: FormGroup;
  public orden: OrdenI[] = [];
  public producto: ProductoI[] = [];

  constructor(
    private fb: FormBuilder, // For building the form
    private detallesOrdenesService: DetallesOrdenesService, // Service to handle API interactions
    private router: Router // For navigation after form submission
  ) {
    // Initialize the form with default values and validation rules
    this.orderDetailsForm = this.fb.group({
      id_orden: ['', Validators.required],
      id_producto: ['', Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      precio_unitario: [0, [Validators.required, Validators.min(0.01)]]
    });
  }

  // Handles form submission
  onSubmit() {
    if (this.orderDetailsForm.valid) {
      // Extract form values
      const orderDetails = this.orderDetailsForm.value;

      // Call the service to create a new order detail
      this.detallesOrdenesService.createDetallesOrden(orderDetails).subscribe({
        next: (response) => {
          console.log('Order detail created successfully:', response);
          this.router.navigate(['/order-details']); // Navigate to the list of order details
        },
        error: (error) => {
          console.error('Error creating order detail:', error);
        }
      });
    }
  }

  // Handles cancel action
  onCancel(): void {
    console.log('Cancel action triggered.');
    this.orderDetailsForm.reset(); // Reset the form
    this.router.navigate(['/order-details']); // Navigate back to order details list
  }
}
