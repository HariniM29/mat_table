// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title(title: any) {
//     throw new Error('Method not implemented.');
//   }
 

//   displayedColumns = ['id', 'name', 'age'];
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // dataSource = [
  //   { id: 1, name: 'John', age: 30 },
  //   { id: 2, name: 'Alice', age: 25 },
  //   { id: 3, name: 'Bob', age: 35 }
  // ];

  // displayedColumns = ['id', 'name', 'age'];

  cell: any[] = [
    {
      date: '2024-03-06',
      locationName: 'New York',
      description: 'Office Supplies',
      name: 'John Doe',
      invoiceNO_PINO: 'INV12345',
      amount: 500.00,
      requester: 'Jane Smith',
      additionalnfo: 'Urgent delivery needed',
      mdComment: 'Approved',
      bankName: 'ABC Bank',
      sapNumber: 'SAP123'
    },
    {
      date: '2024-03-07',
      locationName: 'Los Angeles',
      description: 'Equipment Rental',
      name: 'Alice Johnson',
      invoiceNO_PINO: 'PIN98765',
      amount: 1500.00,
      requester: 'Bob Brown',
      additionalnfo: 'Includes insurance',
      mdComment: 'Pending approval',
      bankName: 'XYZ Bank',
      sapNumber: 'SAP456'
    },
  ]
}