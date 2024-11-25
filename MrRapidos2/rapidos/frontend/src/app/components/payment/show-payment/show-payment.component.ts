import { Component,OnInit } from '@angular/core';
import { PagoService } from '../../../services/pago.service';
import { PagoI } from '../../../models/pago';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-show-payment',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule, CommonModule],
  templateUrl: './show-payment.component.html',
  styleUrl: './show-payment.component.css'
})
export class ShowPaymentComponent {
public payments : PagoI[]=[]

  constructor(
   private paymentService: PagoService,
    private router : Router

){}
  ngOnInit(): void {
    this.fetchPayments(); // Fetches the list of employees on component initialization

}

fetchPayments(): void {
  this.paymentService.getAllPagos().subscribe({
    next: (data) => {
      this.payments = data; // Populates the employee list
    },
    error: (err) => {
      console.error('Error fetching employees:', err);
    }
  });
}


/**
   * Deletes an employee by ID and refreshes the list
   * @param id - The ID of the employee to delete
   */
deletePayment(id: number): void {
  this.paymentService.deletePago(id).subscribe({
    next: () => {
      console.log(`Employee with ID ${id} deleted successfully.`);
      this.fetchPayments(); // Refreshes the employee list after deletion
    },
    error: (err) => {
      console.error(`Error deleting employee with ID ${id}:`, err);
    }
  });
}
}