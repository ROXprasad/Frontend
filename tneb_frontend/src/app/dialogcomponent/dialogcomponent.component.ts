import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogcomponent',
  templateUrl: './dialogcomponent.component.html',
  styleUrls: ['./dialogcomponent.component.scss']
})
export class DialogcomponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogcomponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    switch (data.message.status) {
      case "Success":
        data.message.status= 'Registeration Completed';
        break;
      case "Error":
        data.message.status= 'Registeration Not yet Completed';
        break;
      default:
        data.message.status = `Unknown error occured.`;
    }
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
