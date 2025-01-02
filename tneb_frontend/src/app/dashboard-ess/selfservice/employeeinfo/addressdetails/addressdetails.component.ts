import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
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
  selector: 'app-addressdetails',
  templateUrl: './addressdetails.component.html',
  styleUrls: ['./addressdetails.component.scss']
})
export class AddressdetailsComponent implements OnInit {
  addressform: any[]=[];
  fcpersonalno = new FormControl();
  personalno: string = '10117989';
  fname: string = 'Mohammed';
  lname: string = 'Azarudheen';
  isDisabled1: boolean = true;
  isDisabled2: boolean = true;
  isDisabled3: boolean = true;
  isDisabled4: boolean = true;
  isDisabled5: boolean = true;
  isDisabled6: boolean = true;
  isDisabled7: boolean = true;
  isDisabled8: boolean = true;
  isDisabled9: boolean = true;
  isDisabled10: boolean = true;
  isDisabled11: boolean = true;
  isDisabled12: boolean = true;
  isDisabled13: boolean = true;
  isDisabled14: boolean = true;
  isDisabled15: boolean = true;
  isDisabled16: boolean = true;
  isDisabled17: boolean = true;
  isDisabled18: boolean = true;
  inputStates: boolean[];
  cities: any[];
  marital: any[];
  productDialog: boolean;
  submitted: boolean;
  Delete = '';
  // languages: any = [
  //   { name: 'Tamil', code: 'Tamil' },
  //   { name: 'English', code: 'English' },
  //   { name: 'Hindi', code: 'Hindi' },
  //   { name: 'Telugu', code: 'Telugu' }
  // ];
  @ViewChild('txtFiche1') txtFiche1: ElementRef;
  @ViewChild('txtFiche2') txtFiche2: ElementRef;
  @ViewChild('txtFiche3') txtFiche3: ElementRef;
  @ViewChild('txtFiche4') txtFiche4: ElementRef;
  @ViewChild('txtFiche5') txtFiche5: ElementRef;
  @ViewChild('txtFiche6') txtFiche6: ElementRef;
  @ViewChild('txtFiche7') txtFiche7: ElementRef;
  @ViewChild('txtFiche8') txtFiche8: ElementRef;
  @ViewChild('txtFiche9') txtFiche9: ElementRef;
  @ViewChild('txtFiche10') txtFiche10: ElementRef;
  @ViewChild('txtFiche11') txtFiche11: ElementRef;
  @ViewChild('txtFiche12') txtFiche12: ElementRef;
  @ViewChild('txtFiche13') txtFiche13: ElementRef;
  @ViewChild('txtFiche14') txtFiche14: ElementRef;
  @ViewChild('txtFiche15') txtFiche15: ElementRef;
  @ViewChild('txtFiche16') txtFiche16: ElementRef;
  @ViewChild('txtFiche17') txtFiche17: ElementRef;
  @ViewChild('txtFiche18') txtFiche18: ElementRef;
  ssstdt: string = "";
  date3: Date;
  personalformat: any;
  languagesability1:any[]=[];
  languagesability2:any[]=[];
  languagesability3:any[]=[];
  educationform: any;
  FamilyForm: any[]=[];
  challengeData: Date;
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
    this.cities = [
      { name: 'Male', code: 'Male' },
      { name: 'Female', code: 'Female' },
    ];
    this.marital = [
      {
        name: 'Married',
        code: 'Married',
      },
      {
        name: 'Unmarried',
        code: 'Unmarried',
      },
    ];

  
  }
  

  ngOnInit(): void {
 
    const userid=this.authservice.getuserid();
    let result=parseInt(userid);
    // this.loader.show();
    this.apiservice.getaddressdetails(result).then((result)=>{
      // this.loader.hide();
      if(result !=null){
        this.addressform=result;
      }
    })
   
  }
  convertDateString(dateStr: string): Date | null {
    this.datestr =new Date(dateStr) ;
    return this.datestr ? this.datestr: null;
   }
}
