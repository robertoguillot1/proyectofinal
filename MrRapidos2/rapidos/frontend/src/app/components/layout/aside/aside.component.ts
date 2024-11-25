import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu'; // Import PrimeNG's PanelMenu module
import { MenuItem } from 'primeng/api'; // Import MenuItem interface for defining menu items
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-aside', // Component's name for referencing in other parts of the app
  standalone: true, // Indicates that this component can be used independently
  imports: [PanelMenuModule, ButtonModule, PanelModule], // PrimeNG's PanelMenu is imported here
  templateUrl: './aside.component.html', // Path to the HTML template file
  styleUrls: ['./aside.component.css'], // Path to the CSS styles for this component
})
export class AsideComponent {
  items: MenuItem[] = []; // An array to hold the menu items

  // Lifecycle method runs after the component is initialized
  ngOnInit(): void {
    // Menu items definition
    this.items = [
      {
        label: 'Clients', // Name of the menu item (e.g., Clients)
        icon: 'pi pi-fw pi-users', // PrimeNG icon class for a "users" icon
        routerLink: '/clientes', // Route to navigate when clicked
      },
      {
        label: 'Employees', // Employees
        icon: 'pi pi-fw pi-id-card', // Icon representing employees
        routerLink: '/employees', // Route for employees page
      },
      {
        label: 'Orders', // Orders
        icon: 'pi pi-fw pi-file', // Icon for orders
        routerLink: '/orders', // Route for orders page
      },
      {
        label: 'Products', // Products
        icon: 'pi pi-fw pi-shopping-bag', // Icon for products
        routerLink: '/products', // Route for products page
      },
      {
        label: 'Payments', // Payments
        icon: 'pi pi-fw pi-dollar', // Icon representing payments
        routerLink: '/payments', // Route for payments page
      },
      {
        label: 'Order Details', // Order Details
        icon: 'pi pi-fw pi-list', // Icon for listing items
        routerLink: '/order-details', // Route for order details page
      },
      {
        label: 'Advanced Search', // New label for advanced search
        icon: 'pi pi-fw pi-search', // Icon for advanced search
        routerLink: '/reportes', // Route for the advanced search page
      },
    ];
  }
}
