import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-error-handle',
  templateUrl: './error-handle.component.html',
  styleUrls: ['./error-handle.component.scss']
})
export class ErrorHandleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ErrorHandleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    switch (data.message.status) {
      case 400:
        data.message.status = 'Bad Request. Please check your input.';
        break;
      case 401:
        data.message.status = data['token_expired'] ? data['token_expired'] : 'Unauthorized. Please log in with registered credential.';
        break;
      case 403:
        data.message.status = 'Forbidden. You do not have permission.';
        break;
      case 404:
        data.message.status = 'Not Found. The requested resource does not exist.';
        break;
      case 500:
        data.message.status = 'Internal Server Error. Please try again later.';
        break;
      case 502:
        data.message.status = 'Bad Gateway. Please try again later.';
        break;
      case 503:
        data.message.status = 'Service Unavailable. Please try again later.';
        break;
      case 504:
        data.message.status = 'Gateway Timeout. Please try again later.';
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
