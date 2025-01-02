import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable,throwError } from 'rxjs';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';
import { LoaderService } from 'src/app/app-loader/loader.service';
import { catchError } from 'rxjs/operators';
import { ErrorHandleComponent } from 'src/app/error-handle/error-handle.component';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private HTTPCLIENT: HttpClient,private TOKEN:AuthService,private loader:LoaderService,private dialog: MatDialog,) { }
  public Post(inputurl: string, input: any): Observable<object> {
    let header = {
      headers: new HttpHeaders(),
      'Content-Type': 'application/json; charset=utf-8;',
      withCredentials: true, 
    };
    const token = this.TOKEN.getstoken();
    if (token) {
      header.headers = header.headers.set('Authorization', `Bearer ${token}`);
    }
  
    return this.HTTPCLIENT.post(inputurl, input, header).pipe(
      catchError((error) => {
        let errorMessage = 'An unknown error occurred!';
  
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
         this.loader.hide();
        const openDialogs = this.dialog.openDialogs;
        if (openDialogs && openDialogs.length > 0) {
          openDialogs.forEach(dialog => dialog.close());
        }
          this.dialog.open(ErrorHandleComponent, {
          data: { message: error }
        });
        return throwError(() => new Error(errorMessage));
      })
    );
  }
  public Get(inputurl: string): Observable<object> {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8;',
      }),
      withCredentials: true, 
    };
  
    const token = this.TOKEN.getstoken();
    if (token) {
      header.headers = header.headers.set('Authorization', `Bearer ${token}`);
    } 
    // else {
    //   this.loader.show();
    // }
  
    return this.HTTPCLIENT.get(inputurl, header).pipe(
      catchError((error) => {
        let errorMessage = 'An unknown error occurred!';
  
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
          // console.error('Error:', errorMessage);
        this.loader.hide();
        const openDialogs = this.dialog.openDialogs;
        if (openDialogs && openDialogs.length > 0) {
          openDialogs.forEach(dialog => dialog.close());
        }
          this.dialog.open(ErrorHandleComponent, {
          data: { message: error }
        });
      return throwError(() => new Error(errorMessage));
      })
    );
  }
}
