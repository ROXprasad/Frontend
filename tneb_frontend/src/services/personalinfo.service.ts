import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/app-loader/loader.service';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalinfoService {

    private apiUrl:any; // Replace with your API URL
  private _config: any;
  constructor(private http: HttpClient,   private loader :LoaderService,private apiservice:AuthService,private Http:HttpService) {
   this.apiUrl= this.apiservice.getApi();
   
   }
  getemployeorgdetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0001_OrgAssignment?personalno=`+values)
    .toPromise()
    .then(res => <any[]>res)
    .then(data => {this.loader.hide();return data; })
    
  }
  geteducationalData(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0003_EducationDetails?personalno=`+values)
    .toPromise()
    .then(res => <any[]>res)
    .then(data => {this.loader.hide();return data; })
  
  }
  getDatespec(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0010_PersonalDateSpecification?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
   
  }
  getpersonalData(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0002_PersonalDetails?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
   
  }
  getfamilyData(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0005_FamilyDetails?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
    
  }
  getpersonaldetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0004_PersonalChallenges?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
   
  }
  getaddressdetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0006_AddressDetails?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
   
  }
  getnominationdetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0014_PersonalNomination?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
  
  }
  getactiondetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0000_ActionSet?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
    
  }
  getimagedetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PostImage?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
    
  }
  getbankdetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0009_PersonalBankDet?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
   
  }
  getpersonalcommunicationdetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0011_PersonalCommunication?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
   
  }
  getpersonalorderdetails(values:any,type:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0008_PersonalOrder?personalno=${values}&subtype=${type}`)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
    
  }
  getpersonalpfdetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0012_PersonalPF?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
    
  }
  getpersonalsantuatorydetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0013_PersonalOtherStatutory?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
    
  }
  getpersonaltrainingdetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0015_PersonalTrainingDet?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
   
  }
  getpersonaldeptdetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0016_PersonalDepartmentTest?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
    
  }
  getpersonalawarddetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0017_PersonalAwards?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
    
  }
  getpersonalidsdetails(values:any) {
    this.loader.show()
    return this.Http.Get(`${this.apiUrl}/Employee/PA0019_PersonalID?personalno=`+values)
    .toPromise()
    .then(res => <any>res)
    .then(data => {this.loader.hide();return data; })
   
  }
 
}
