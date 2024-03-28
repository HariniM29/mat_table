// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-custom-table',
//   templateUrl: './custom-table.component.html',
//   styleUrls: ['./custom-table.component.css']
// })
// export class CustomTableComponent {

//   PaymentRecords: any[][] = [
//     ["2024-03-01", "Location 1", "Description 1", "John Doe", "INV-001", "$100.00", "Requester 1", "Additional Info 1", "Comment 1", "Bank A", "123456", ""],
//     ["2024-03-02", "Location 2", "Description 2", "Jane Smith", "INV-002", "$150.00", "Requester 2", "Additional Info 2", "Comment 2", "Bank B", "789012", ""],
//     ["2024-03-03", "Location 3", "Description 3", "Alice Johnson", "INV-003", "$200.00", "Requester 3", "Additional Info 3", "Comment 3", "Bank C", "345678", ""],
//     ["2024-03-04", "Location 4", "Description 4", "Bob Brown", "INV-004", "$250.00", "Requester 4", "Additional Info 4", "Comment 4", "Bank D", "901234", ""],
//     ["2024-03-05", "Location 5", "Description 5", "Eva Wilson", "INV-005", "$300.00", "Requester 5", "Additional Info 5", "Comment 5", "Bank E", "567890", ""]
//   ];

//   selectedCells: { row: number, col: number }[] = [];
  

//   onMouseDownCell(event: MouseEvent, rowIndex: number, colIndex: number): void {
//     event.preventDefault();
//     const cell = { row: rowIndex, col: colIndex };
//     const index = this.selectedCells.findIndex(c => c.row === rowIndex && c.col === colIndex);
//     if (index === -1) {
//       this.selectedCells.push(cell);
//     } else {
//       this.selectedCells.splice(index, 1);
//     }
//   }

//   copySelectedValues(): void {
//     if (this.selectedCells.length === 0) {
//       alert("No cells selected.");
//       return;
//     }
//     const selectedData = this.selectedCells.map(({ row, col }) =>
//       this.PaymentRecords[row][col]
//     ).join("\t");

//     navigator.clipboard.writeText(selectedData)
//       .then(() => {
//         alert("Copied selected cells:\n" + selectedData);
//       })
//       .catch(err => {
//         console.error('Failed to copy text: ', err);
//       });
//   }
//   isSelected(row: number, col: number): boolean {
//     return this.selectedCells.some(cell => cell.row === row && cell.col === col);
//   }
  
// }













///okkkkkkkkk
import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent {

  PaymentRecords: any[][] = [
    ["2024-03-01", "Location 1", "Description 1", "John Doe", "INV-001", "$100.00", "Requester 1", "Additional Info 1", "Comment 1", "Bank A", "123456", ""],
    ["2024-03-02", "Location 2", "Description 2", "Jane Smith", "INV-002", "$150.00", "Requester 2", "Additional Info 2", "Comment 2", "Bank B", "789012", ""],
    ["2024-03-03", "Location 3", "Description 3", "Alice Johnson", "INV-003", "$200.00", "Requester 3", "Additional Info 3", "Comment 3", "Bank C", "345678", ""],
    ["2024-03-04", "Location 4", "Description 4", "Bob Brown", "INV-004", "$250.00", "Requester 4", "Additional Info 4", "Comment 4", "Bank D", "901234", ""],
    ["2024-03-05", "Location 5", "Description 5", "Eva Wilson", "INV-005", "$300.00", "Requester 5", "Additional Info 5", "Comment 5", "Bank E", "567890", ""]
  ];

  selectedCells: { row: number, col: number }[] = [];
  isDragging: boolean = false;
  startRowIndex: number = -1;
  startColIndex: number = -1;

  onMouseDownCell(event: MouseEvent, rowIndex: number, colIndex: number): void {
    event.preventDefault();
    const cell = { row: rowIndex, col: colIndex };
    const index = this.selectedCells.findIndex(c => c.row === rowIndex && c.col === colIndex);
    if (index === -1) {
      this.selectedCells.push(cell);
    } else {
      this.selectedCells.splice(index, 1);
    }
    this.isDragging = true;
    this.startRowIndex = rowIndex;
    this.startColIndex = colIndex;
  }

  onMouseMoveCell(event: MouseEvent, rowIndex: number, colIndex: number): void {
    event.preventDefault();
    if (this.isDragging) {
      const cell = { row: rowIndex, col: colIndex };
      const index = this.selectedCells.findIndex(c => c.row === rowIndex && c.col === colIndex);
      if (index === -1) {
        this.selectedCells.push(cell);
      } else {
        this.selectedCells.splice(index, 1);
      }
    }
  }

  onMouseUp(event: MouseEvent): void {
    event.preventDefault();
    this.isDragging = false;
    this.startRowIndex = -1;
    this.startColIndex = -1;
  }

 
  copySelectedValues(): void {
    if (this.selectedCells.length === 0) {
      alert("No cells selected.");
      return;
    }
    const selectedData = this.selectedCells.map(({ row, col }) =>
      this.PaymentRecords[row][col]
    ).join("\t");
  
    // Check if document is focused
    if (document.hasFocus()) {
      navigator.clipboard.writeText(selectedData)
        .then(() => {
          alert("Copied selected cells:\n" + selectedData);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    } else {
      // Handle the case when the document is not focused
      console.error('Document is not focused.');
    }
  }
  

  isSelected(row: number, col: number): boolean {
    return this.selectedCells.some(cell => cell.row === row && cell.col === col);
  }
}
