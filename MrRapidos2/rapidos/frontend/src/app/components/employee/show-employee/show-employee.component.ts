import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EmpleadoService } from '../../../services/empleado.service';
import { EmpleadoI } from '../../../models/empleado';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-show-employee',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  public employees: EmpleadoI[] = [];

  constructor(
    private employeeService: EmpleadoService, // Service to handle API operations for employees
    private router: Router // Router for navigation
  ) {}

  ngOnInit(): void {
    this.fetchEmployees(); // Fetches the list of employees on component initialization
  }

  /**
   * Fetch the list of employees from the API
   */
  fetchEmployees(): void {
    this.employeeService.getAllEmpleados().subscribe({
      next: (data) => {
        this.employees = data; // Populates the employee list
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
  deleteEmployee(id: number): void {
    this.router.navigateByUrl('/employees');
    this.employeeService.deleteEmpleado(id).subscribe({
      next: () => {
        console.log(`Employee with ID ${id} deleted successfully.`);
        this.fetchEmployees(); // Refreshes the employee list after deletion
      },
      error: (err) => {
        console.error(`Error deleting employee with ID ${id}:`, err);
        this.router.navigateByUrl('/employees');
      }
    });
  }
}
