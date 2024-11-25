import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DetallesOrdenesI } from '../../../models/detalles-Ordenes';
import { DetallesOrdenesService } from '../../../services/detalles-ordenes.service';

@Component({
  selector: 'app-show-order-details',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule, CommonModule],
  templateUrl: './show-order-details.component.html',
  styleUrl: './show-order-details.component.css'
})
export class ShowOrderDetailsComponent implements OnInit {
  public orderdetails: DetallesOrdenesI[] = []; // Array to store order details

  constructor(
    private orderDetailService: DetallesOrdenesService, // Service to fetch order details
    private router: Router // Router for navigation
  ) {}

  ngOnInit(): void {
    this.fetchOrderDetails(); // Fetches order list on component initialization
  }

  /**
   * Fetches the order details from the backend.
   */
  fetchOrderDetails(): void {
    this.orderDetailService.getAllDetallesOrdenes().subscribe({
      next: (data) => {
        this.orderdetails = data; // Assign the fetched data to the array
      },
      error: (err) => {
        console.error('Error fetching order details:', err); // Error handling
      }
    });
  }

  /**
   * Deletes an order detail by its ID.
   * @param id - ID of the order detail to delete
   */
  deleteOrderDetails(id: number): void {
    this.orderDetailService.deleteDetallesOrden(id).subscribe({
      next: () => {
        this.fetchOrderDetails(); // Refresh the list after deletion
      },
      error: (err) => {
        console.error(`Error deleting order detail with ID ${id}:`, err); // Error handling
      }
    });
  }
}
