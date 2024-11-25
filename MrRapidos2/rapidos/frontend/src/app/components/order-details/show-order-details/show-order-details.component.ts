import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DetallesOrdenesI } from '../../../models/detalles-Ordenes';
import { DetallesOrdenesService } from '../../../services/detalles-ordenes.service';

@Component({
  selector: 'app-show-order-details',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule,CommonModule],
  templateUrl: './show-order-details.component.html',
  styleUrl: './show-order-details.component.css'
})
export class ShowOrderDetailsComponent {
  public orderdetails : DetallesOrdenesI[] = [];

  constructor (
    private orderDetailService:DetallesOrdenesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.fetchOrderDetails(); // Fetches order list on initialization
}

fetchOrderDetails(): void {
  this.orderDetailService.getAllDetallesOrdenes().subscribe({
    next: (data) => {
      this.orderdetails = data; // Assign the data to the orders array
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
deleteOrderDetails(id: number): void {
  this.orderDetailService.deleteDetallesOrden(id).subscribe({
    next: () => {
      this.fetchOrderDetails(); // Refresh the order list after deletion
    },
    error: (err) => {
      console.error(`Error deleting order with ID ${id}:`, err);
    }
  });
}
}
