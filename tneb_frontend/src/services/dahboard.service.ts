import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from 'src/app/app-loader/loader.service';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DahboardService {

    private apiUrl:any; // Replace with your API URL
    private _config: any;
    constructor(private http: HttpClient,   private loader :LoaderService,private apiservice:AuthService,private Http:HttpService) {
     this.apiUrl= this.apiservice.getApi();
     
     }
     gettailes(values:any) {
      this.loader.show()
      return this.Http.Get(`${this.apiUrl}/Employee/PA2006_Dashboard?personalno=`+values)
      .toPromise()
      .then(res => <any[]>res)
      .then(data => {this.loader.hide();return data; })
      
    }
}
