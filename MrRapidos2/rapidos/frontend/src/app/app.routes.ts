import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { Routes } from '@angular/router';

// Import components for "detallesOrdenes" (order details)
import { ShowOrderDetailsComponent } from './components/order-details/show-order-details/show-order-details.component';
import { CreateOrderDetailsComponent } from './components/order-details/create-order-details/create-order-details.component';
import { UpdateOrderDetailsComponent } from './components/order-details/update-order-details/update-order-details.component';

// Import components for "empleados" (employees)
import { ShowEmployeeComponent } from './components/employee/show-employee/show-employee.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';

// Import components for "ordenes" (orders)
import { ShowOrderComponent } from './components/order/show-order/show-order.component';
import { CreateOrderComponent } from './components/order/create-order/create-order.component';
import { UpdateOrderComponent } from './components/order/update-order/update-order.component';

// Import components for "pagos" (payments)
import { ShowPaymentComponent } from './components/payment/show-payment/show-payment.component';
import { CreatePaymentComponent } from './components/payment/create-payment/create-payment.component';
import { UpdatePaymentComponent } from './components/payment/update-payment/update-payment.component';

// Import components for "productos" (products)
import { ShowProductComponent } from './components/product/show-product/show-product.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';

// Import the ReportesComponent for showing advanced search
import { ReportesComponent } from './components/reportes/reportes.component';

export const routes: Routes = [
  // Default route: Redirects to the advanced search page
  {
    path: '',
    redirectTo: '/reportes',
    pathMatch: 'full',
  },
  
  // Routes for "clientes" (clients)
  {
    path: 'clientes',
    component: MostrarClienteComponent,
  },
  {
    path: 'clientes/nuevo',
    component: CrearClienteComponent,
  },
  {
    path: 'clientes/edit/:id',
    component: ActualizarClienteComponent,
  },
  
  // Routes for "order details"
  {
    path: 'order-details',
    component: ShowOrderDetailsComponent,
  },
  {
    path: 'order-details/new',
    component: CreateOrderDetailsComponent,
  },
  {
    path: 'order-details/edit/:id',
    component: UpdateOrderDetailsComponent,
  },
  
  // Routes for "empleados" (employees)
  {
    path: 'employees',
    component: ShowEmployeeComponent,
  },
  {
    path: 'employees/new',
    component: CreateEmployeeComponent,
  },
  {
    path: 'employees/edit/:id',
    component: UpdateEmployeeComponent,
  },
  
  // Routes for "ordenes" (orders)
  {
    path: 'orders',
    component: ShowOrderComponent,
  },
  {
    path: 'orders/new',
    component: CreateOrderComponent,
  },
  {
    path: 'orders/edit/:id',
    component: UpdateOrderComponent,
  },
  
  // Routes for "pagos" (payments)
  {
    path: 'payments',
    component: ShowPaymentComponent,
  },
  {
    path: 'payments/new',
    component: CreatePaymentComponent,
  },
  {
    path: 'payments/edit/:id',
    component: UpdatePaymentComponent,
  },
  
  // Routes for "productos" (products)
  {
    path: 'products',
    component: ShowProductComponent,
  },
  {
    path: 'products/new',
    component: CreateProductComponent,
  },
  {
    path: 'products/edit/:id',
    component: UpdateProductComponent,
  },

  // Route for advanced search
  {
    path: 'reportes',
    component: ReportesComponent,
  },
];
