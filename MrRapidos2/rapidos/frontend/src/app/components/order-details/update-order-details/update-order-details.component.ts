import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetallesOrdenesI } from '../../../models/detalles-Ordenes'; // Interface for order details
import { DetallesOrdenesService } from '../../../services/detalles-ordenes.service'; // Service for API calls
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-update-order-details',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    CardModule,
    InputGroupModule,
    InputTextModule,
    DropdownModule,
  ],
  templateUrl: './update-order-details.component.html',
  styleUrls: ['./update-order-details.component.css'],
})
export class UpdateOrderDetailsComponent implements OnInit {
  form!: FormGroup; // Form for order details
  detalleId!: number; // ID of the order detail to update
  orders: any[] = []; // Dropdown options for orders
  products: any[] = []; // Dropdown options for products

  constructor(
    private fb: FormBuilder,
    private detallesOrdenesService: DetallesOrdenesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadOrderDetails();
    this.loadDropdownData();
  }

  /**
   * Initialize the reactive form with validation
   */
  private initializeForm(): void {
    this.form = this.fb.group({
      id_orden: ['', [Validators.required]],
      id_producto: ['', [Validators.required]],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      precio_unitario: [0, [Validators.required, Validators.min(0.01)]],
    });
  }

  /**
   * Load order details by ID and populate the form
   */
  private loadOrderDetails(): void {
    this.detalleId = this.route.snapshot.params['id'];
    this.detallesOrdenesService.getDetallesOrdenById(this.detalleId).subscribe((detalle: DetallesOrdenesI) => {
      this.form.patchValue(detalle);
    });
  }

  /**
   * Load dropdown data for orders and products
   */
  private loadDropdownData(): void {
    this.detallesOrdenesService.getAllDetallesOrdenes().subscribe((data) => {
      this.orders = data.map((item) => ({ label: `Order ${item.id}`, value: item.id }));
    });

    this.detallesOrdenesService.getAllDetallesOrdenes().subscribe((data) => {
      this.products = data.map((item) => ({ label: `Product ${item.id_producto}`, value: item.id_producto }));
    });
  }

  /**
   * Handle form submission
   */
  onSubmit(): void {
    if (this.form.valid) {
      this.detallesOrdenesService.updateDetallesOrden(this.detalleId, this.form.value).subscribe(() => {
        alert('Order detail updated successfully!');
        this.router.navigate(['/order-details']);
      });
    }
  }

  /**
   * Cancel and navigate back to the list
   */
  cancel(): void {
    this.router.navigate(['/order-details']);
  }
}
