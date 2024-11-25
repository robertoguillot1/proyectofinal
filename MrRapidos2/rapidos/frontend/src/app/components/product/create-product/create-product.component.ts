import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProductoI } from '../../../models/producto'; // Import product interface
import { ProductoService } from '../../../services/producto.service'; // Import product service
import { MessageService } from 'primeng/api'; // PrimeNG MessageService
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    RouterModule,
    InputNumberModule, // Agregar módulo para InputNumber
    CheckboxModule // Agregar módulo para Checkbox
  ],

  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers: [MessageService] // Provide PrimeNG services
})
export class CreateProductComponent implements OnInit {
  public productForm: FormGroup;

  constructor(
    private fb: FormBuilder, // For building reactive forms
    private productoService: ProductoService, // Service for API interactions
    private messageService: MessageService, // For toast notifications
    private router: Router // For navigation
  ) {
    // Initialize the reactive form
    this.productForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]], // Product name
      descripcion: ['', [Validators.required]], // Product description
      precio_base: [null, [Validators.required, Validators.min(0)]], // Base price
      activo: [true, [Validators.required]] // Product active status
    });
  }

  ngOnInit(): void {}

  /**
   * Handles form submission to create a product
   */
  onSubmit(): void {
    if (this.productForm.valid) {
      const product: ProductoI = this.productForm.value;

      this.productoService.createProducto(product).subscribe({
        next: () => {
          // Show success message and navigate to the product list
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product created successfully!' });
          this.router.navigate(['/products']);
        },
        error: (err) => {
          // Handle errors and show error message
          console.error('Error creating product:', err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create product.' });
        }
      });
    } else {
      // Notify user about invalid form
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Please fill out the form correctly.' });
    }
  }

  /**
   * Cancels the creation and navigates back
   */
  onCancel(): void {
    this.router.navigate(['/products']);
  }
}


