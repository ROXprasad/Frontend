import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ProductService } from 'src/services/product.service';
import { PersonalinfoService } from 'src/services/personalinfo.service';
import { AuthService } from 'src/services/auth.service';
import { LoaderService } from 'src/app/app-loader/loader.service';

@Component({
  selector: 'app-educationaldetails',
  templateUrl: './educationaldetails.component.html',
  styleUrls: ['./educationaldetails.component.scss']
})
export class EducationaldetailsComponent implements OnInit {

  personalform: FormGroup;
  fcpersonalno = new FormControl();
  inputStates: boolean[];
  cities: any[];
  marital: any[];
  productDialog: boolean;
  submitted: boolean;
  Delete = '';
  
  ssstdt: string = "";
  date3: Date;
  personalformat: any;
  languagesability1:any[]=[];
  languagesability2:any[]=[];
  languagesability3:any[]=[];
  educationform: any[]=[];
  FamilyForm: any;
  datestr: Date;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private apiservice: PersonalinfoService,
    private authservice: AuthService,
    private loader: LoaderService,
  ) {

  
  }
  

  ngOnInit(): void {
 
    const userid=this.authservice.getuserid();
    let result=parseInt(userid);
    this.loader.show();
    this.apiservice.geteducationalData(result).then((result)=>{
      // this.loader.hide();
      if(result !=null){
        const yourJsonArray=result;
        const educationOrder = [
          "PG", 
          "UG", 
          "DIPLOMA", 
          "HSC / 12th STD", 
          "Primary school"
        ];
        const sortedJson = yourJsonArray.sort((a, b) => {
          // Get the index of educest_description in the educationOrder array
          const indexA = educationOrder.indexOf(a.educest_description);
          const indexB = educationOrder.indexOf(b.educest_description);
        
          // Sort in the order of the array (ascending)
          return indexA - indexB;
        });
        
        console.log(sortedJson);
        if(sortedJson !=null){
          for(let i = 0; i<=sortedJson.length- 1;i++){
            const date=this.convertDateString(sortedJson[i].endDate);
            sortedJson[i].endDate=date;
          }
        };
        const mergedData = this.mergeCodesAndDescriptions(sortedJson);
        const arrayOfObjects = Object.entries(mergedData).map(([key, value]) => value);
        // console.log(mergedData);
        this.educationform=arrayOfObjects;
      }
    })
   
  }
  convertDateString(dateStr: string): Date | null {
    this.datestr =new Date(dateStr) ;
    return this.datestr ? this.datestr: null;
   }
   mergeCodesAndDescriptions(data: any): any {
    const mergedData = data; // Create a copy of the original data
  
    // Define the pairs of code and description
    const fieldsToMerge = [
      // { code: 'companycode', description: 'companycode_description', mergedField: 'companycode_with_description' },
      { code: 'durofcourse', description: 'timeunitmeas_description', mergedField: 'personnelarea_with_description' },
    
      // Add other pairs if necessary
    ];
    for (let i = 0; i < mergedData.length; i++) {
    // Iterate over each pair and merge code and description
    fieldsToMerge.forEach(field => {
      if (mergedData[i][field.code] && mergedData[i][field.description]) {
        // Create a merged field combining code and description
        mergedData[i][field.mergedField] = `${mergedData[i][field.code]} - ${mergedData[i][field.description]}`;
  
        // Optionally, you can delete the original fields if you no longer need them
        delete mergedData[i][field.code];
        delete mergedData[i][field.description];
      }
    });
    }
    return mergedData;
  
  }
}
