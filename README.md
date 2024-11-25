# ProyectoFinal


Welcome to the ProyectoFinal repository! This project is a full-stack web application designed to manage and display structured data effectively. It enables users to perform CRUD operations, view advanced reports, and interact with a dynamic, responsive interface built with cutting-edge technologies.




# Project Description

The ProyectoFinal is a versatile web application developed to manage organizational data. It supports a variety of operations such as creating, updating, and deleting records for different entities (e.g., clients, employees, orders).
The application also includes an Advanced Search feature that allows users to generate customized reports based on clients, employees, and their respective metrics.

This project is ideal for small-to-medium enterprises looking to streamline data management and visualize essential business information.



# Features

CRUD Operations: Comprehensive Create, Read, Update, and Delete functionalities for all entities.
Advanced Search: Users can view summaries, such as the number of orders per client or the number of services provided by employees.
Multi-Database Support: Compatible with major database systems such as MySQL, Microsoft SQL Server, Oracle, and PostgreSQL.
Responsive Frontend: Built with Angular, offering a seamless experience across devices.
Modular API Design: A robust backend API built using Django REST Framework.



# Technologies Used

Backend:
Django: Web framework for fast and secure backend development.
Django REST Framework: Simplifies API creation and management.
Databases Supported:
MySQL
PostgreSQL
Microsoft SQL Server
Oracle
Frontend:
Angular: A TypeScript-based framework for creating dynamic web applications.
Bootstrap: For a responsive and clean user interface.



# Installation

Backend Setup
Clone the repository:

git clone https://github.com/robertoguillot1/proyectofinal.git
cd proyectofinal/backend

Run migrations:

python manage.py migrate
Start the server:

python manage.py runserver


Frontend Setup
Navigate to the frontend folder:
bash
Copiar código
cd ../frontend
Install dependencies:

npm install -g @angular/cli
npm install

Start the Angular development server:

ng serve
Open your browser and navigate to http://localhost:4200



# Advanced Search Feature

The Advanced Search feature is a powerful tool for generating quick insights about:

Clients: Displays the number of orders associated with each client.
Employees: Shows the number of services handled by each employee.
This feature is particularly useful for analyzing data and identifying key trends in the organization.

Example:
The screenshot below illustrates how the application organizes and displays client and employee data:
![image](https://github.com/user-attachments/assets/d6170e2c-9648-494d-81d7-50742b1f570e)


Clients: A list of clients with their contact information and total orders.
Employees: A breakdown of employees, their roles, and the number of services they have provided.


# Screenshots

Advanced Search Example

This screenshot showcases the Advanced Search feature, providing a user-friendly interface for data analysis.
![image](https://github.com/user-attachments/assets/bc96b55e-f75b-4b93-98e9-390fd17b6c59)
![image](https://github.com/user-attachments/assets/bbb9057f-7757-4fa1-801b-a84d2f199c7a)

![image](https://github.com/user-attachments/assets/d6170e2c-9648-494d-81d7-50742b1f570e)

# Contributors

Roberto Guillot
Ever Perez
Kerlon Causado


# License

This project is licensed under the MIT License. See the LICENSE file for details.
