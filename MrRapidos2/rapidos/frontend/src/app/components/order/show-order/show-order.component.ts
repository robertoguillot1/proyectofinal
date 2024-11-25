import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OrdenService } from '../../../services/orden.service';
import { OrdenI } from '../../../models/orden';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-show-order',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule,CommonModule],
  templateUrl: './show-order.component.html',
  styleUrl: './show-order.component.css'
})
export class ShowOrderComponent implements OnInit {
  public orders: OrdenI[] = [];

  constructor(
    private orderService: OrdenService, // Service to manage API calls for orders
    private router: Router // Router for navigation
  ) {}

  ngOnInit(): void {
    this.fetchOrders(); // Fetches order list on initialization
  }

  /**
   * Fetch all orders from the API.
   */
  fetchOrders(): void {
    this.orderService.getAllOrdenes().subscribe({
      next: (data) => {
        this.orders = data; // Assign the data to the orders array
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
      }
    });
  }

  /**
   * Delete an order by its ID.
   * @param id - Order ID to delete
   */
  deleteOrder(id: number): void {
    this.orderService.deleteOrden(id).subscribe({
      next: () => {
        this.fetchOrders(); // Refresh the order list after deletion
      },
      error: (err) => {
        console.error(`Error deleting order with ID ${id}:`, err);
      }
    });
  }
}
