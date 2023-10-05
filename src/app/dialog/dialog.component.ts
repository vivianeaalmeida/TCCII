import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(private dialogRef: MatDialogRef<DialogComponent>){}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
