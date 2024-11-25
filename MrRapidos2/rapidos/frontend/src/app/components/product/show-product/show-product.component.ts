import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common'; // Import CommonModule for pipes like currency
import { ProductoService } from '../../../services/producto.service'; // Importing the Producto service
import { ProductoI } from '../../../models/producto';

@Component({
  selector: 'app-show-product',
  standalone: true,
  imports: [
    CommonModule, // Import this to fix the currency pipe error
    TableModule,
    ButtonModule,
    CardModule,
    RouterModule
  ],
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  public products: ProductoI[] = [];

  constructor(
    private productoService: ProductoService, // Service to manage API calls for products
    private router: Router // Router for navigation
  ) {}

  ngOnInit(): void {
    this.fetchProducts(); // Fetches product list on initialization
  }

  /**
   * Fetch all products from the API.
   */
  fetchProducts(): void {
    this.productoService.getAllProductos().subscribe({
      next: (data) => {
        this.products = data; // Assign the data to the products array
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  /**
   * Delete a product by its ID.
   * @param id - Product ID to delete
   */
  deleteProduct(id: number): void {
    this.productoService.deleteProducto(id).subscribe({
      next: () => {
        this.fetchProducts(); // Refresh the product list after deletion
      },
      error: (err) => {
        console.error(`Error deleting product with ID ${id}:`, err);
      }
    });
  }
}
