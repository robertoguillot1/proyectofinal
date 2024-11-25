import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoI } from '../../../models/producto'; // Product model interface
import { ProductoService } from '../../../services/producto.service'; // Product service
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputGroupModule,
    CheckboxModule,
    InputNumberModule, // Ensure this module is imported
  ],
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  form!: FormGroup; // Reactive form
  productId!: number; // ID of the product to update

  constructor(
    private fb: FormBuilder, // Form builder for creating reactive form
    private productService: ProductoService, // Product service
    private route: ActivatedRoute, // Activated route for retrieving parameters
    private router: Router // Router for navigation
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadProductData();
  }

  /**
   * Initialize the reactive form
   */
  private initializeForm(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]], // Name is required
      descripcion: ['', [Validators.required, Validators.maxLength(255)]], // Description is required
      precio_base: [0, [Validators.required, Validators.min(0)]], // Base price validation in the form
      activo: [false], // Active status
    });
  }

  /**
   * Load product data by ID
   */
  private loadProductData(): void {
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProductoById(this.productId).subscribe({
      next: (producto: ProductoI) => {
        this.form.patchValue(producto); // Populate form with product data
      },
      error: (err) => {
        console.error('Error loading product:', err);
        alert('Failed to load product data.');
      },
    });
  }

  /**
   * Handle form submission to update the product
   */
  onSubmit(): void {
    if (this.form.valid) {
      this.productService.updateProducto(this.productId, this.form.value).subscribe({
        next: () => {
          alert('Product updated successfully!');
          this.router.navigate(['/products']); // Navigate to product list
        },
        error: (err) => {
          console.error('Error updating product:', err);
          alert('Failed to update product.');
        },
      });
    }
  }

  /**
   * Cancel the operation and navigate back to the product list
   */
  cancel(): void {
    this.router.navigate(['/products']);
  }
}
