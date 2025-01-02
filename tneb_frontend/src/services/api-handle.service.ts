import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoaderService } from 'src/app/app-loader/loader.service';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiHandleService {
   private apiUrl:any;
  private _config: any;
 
  constructor(private http: HttpClient,   private loader :LoaderService,private config:ConfigService,private apiservice:AuthService) {
    this.http.get('./assets/config/app.settings.json').subscribe( (data) => {
      this._config=data;    
      this.apiUrl=this._config['ApplicationSettings']['AUTH_URL'];
      this.apiservice.setApi(this.apiUrl);
  },);
   }

  // GET request
  getData(authoToken: any): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${authoToken}` });
    return this.http.get<any>(`http://192.168.35.149:5081/api/Users/userlist`, { headers })
  }

  // POST request
  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/Users/authenticate`, data, { headers });
  }


  authenticate(data: any): Observable<any> {
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });   
    return this.http.post<any>(`${this.apiUrl}/Login/loginAuthenicate`, data, { headers })
  }
  registerapi(data: any): Observable<any> {
    
    const headers = new HttpHeaders(
      { 
      'Content-Type': 'application/json',
    });   
    return this.http.post<any>(`${this.apiUrl}/Registration/RegistrationForm`, data, { headers })
  }


}
