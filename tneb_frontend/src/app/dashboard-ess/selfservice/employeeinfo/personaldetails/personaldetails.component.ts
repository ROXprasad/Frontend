import { Component, ElementRef, OnInit, ViewChild,ChangeDetectorRef } from '@angular/core';
import { personal } from './personaldetails';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from './personaldetails';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ProductService } from 'src/services/product.service';
import { PersonalinfoService } from 'src/services/personalinfo.service';
import { AuthService } from 'src/services/auth.service';
import { LoaderService } from 'src/app/app-loader/loader.service';
import { ChangedialogComponent } from '../changedialog/changedialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss'],
})
export class PersonaldetailsComponent implements OnInit {
  personalform: FormGroup;
  fcpersonalno = new FormControl();
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
  products: Product[]=[];
  product: Product;
  selectedProducts: Product[];
  submitted: boolean;
  langformat1={};
  langformat2={};
  langformat3={};
  Delete = '';
  languages: any = [
    { name: 'Tamil', code: 'Tamil' },
    { name: 'English', code: 'English' },
    { name: 'Hindi', code: 'Hindi' },
    { name: 'Telugu', code: 'Telugu' }
  ];
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
  personalformat: any={};
  languagesability1:any[]=[];
  languagesability2:any[]=[];
  languagesability3:any[]=[];
  educationform: any;
  FamilyForm: any;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private apiservice: PersonalinfoService,
    private authservice: AuthService,
    private loader: LoaderService,
    private cdr :ChangeDetectorRef,
    private dialog :MatDialog
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

    this.personalform = this.fb.group({
      fcpersonalno: new FormControl({ value: '', disabled: this.isDisabled1 }, [
        Validators.required,
      ]),
      fcfname: new FormControl({ value: '', disabled: this.isDisabled2 }, [
        Validators.required,
      ]),
      fclname: new FormControl({ value: '', disabled: this.isDisabled3 }, [
        Validators.required,
      ]),
      fcgender: new FormControl({ value: '', disabled: this.isDisabled4 }, [
        Validators.required,
      ]),
      fcdate: new FormControl({ value: '', disabled: this.isDisabled5 }, [
        Validators.required,
      ]),
      fcstatus: new FormControl({ value: '', disabled: this.isDisabled6 }, [
        Validators.required,
      ]),
      fcbirth: new FormControl({ value: '', disabled: this.isDisabled7 }, [
        Validators.required,
      ]),
      fcnationality: new FormControl(
        { value: '', disabled: this.isDisabled8 },
        [Validators.required]
      ),
      fccommunicationlang: new FormControl(
        { value: '', disabled: this.isDisabled9 },
        [Validators.required]
      ),
      fcreligion: new FormControl({ value: '', disabled: this.isDisabled10 }, [
        Validators.required,
      ]),
      fcmaritalstat: new FormControl(
        { value: '', disabled: this.isDisabled11 },
        [Validators.required]
      ),
      fccastetype: new FormControl({ value: '', disabled: this.isDisabled12 }, [
        Validators.required,
      ]),
      fcsubcaste: new FormControl({ value: '', disabled: this.isDisabled13 }, [
        Validators.required,
      ]),
      fcheight: new FormControl({ value: '', disabled: this.isDisabled14 }, [
        Validators.required,
      ]),
      fcweight: new FormControl({ value: '', disabled: this.isDisabled15 }, [
        Validators.required,
      ]),
      fcbloodgrp: new FormControl({ value: '', disabled: this.isDisabled16 }, [
        Validators.required,
      ]),
      fcspclfeat: new FormControl({ value: '', disabled: this.isDisabled17 }, [
        Validators.required,
      ]),
      fclang: new FormControl({ value: '', disabled: this.isDisabled18 }, [
        Validators.required,
      ]),
    });
  
  }
  

  ngOnInit(): void {
   // this.productService.getProducts().then((data) => (this.products = data));
 
    const userid=this.authservice.getuserid();
    let result=parseInt(userid);
    // this.loader.show();
    this.apiservice.getpersonalData(result).then((result)=>{
      // this.loader.hide();
      if(result !=null){
        this.personalformat= result;
        this.personalform.get('fcgender').setValue({ name:this.personalformat['gender_description'] , code:this.personalformat['gender_description'] });
        this.personalform.get('fcstatus').setValue(this.personalformat['state_description']);
        this.ssstdt=this.personalformat['birthdate']
        let s = new Date(this.ssstdt);
        this.personalform.get('fcdate').setValue(s);
        this.personalform.get('fcbirth').setValue(this.personalformat['birthplace']);
        this.personalform.get('fcnationality').setValue(this.personalformat['nationality_description']);
        this.personalform.get('fccommunicationlang').setValue(this.personalformat['communicationl_description']);
        this.personalform.get('fcreligion').setValue(this.personalformat['religion_description']);
        if(this.personalformat['maritalstat_description'] =='Marr.'){
          this.personalform
          .get('fcmaritalstat')
          .setValue({ name: "Married", code: 'Married' });
        }else{
          this.personalform
          .get('fcmaritalstat')
          .setValue({ name: "Unmarried", code: 'Unmarried' });
        }
        if( this.personalformat['languages1'] !=null &&  this.personalformat['languages1'] !=''){
          this.langformat1={
            name:this.personalformat['languages1'],
            code:this.personalformat['languages1']
          }
          if(this.personalformat['languagesread1'] !=null){
            this.languagesability1.push('Read');
          }
          if(this.personalformat['languagewrite1'] !=null){
            this.languagesability1.push('Write');
          }
          if(this.personalformat['languagespeak1'] !=null){
            this.languagesability1.push('Speak');
          }
          this.products=
          [
            {
              "id": "1000",
              "name": this.langformat1,
              "ability":this.languagesability1
            }
            ]
        }
       if( this.personalformat['languages2'] !=null && this.personalformat['languages2'] !=''){
        this.langformat2={
          name:this.personalformat['languages2'],
          code:this.personalformat['languages2']
        }
          if(this.personalformat['languagesread2'] !=null){
            this.languagesability2.push('Read');
          }
          if(this.personalformat['languagewrite2'] !=null){
            this.languagesability2.push('Write');
          }
          if(this.personalformat['languagespeak2'] !=null){
            this.languagesability2.push('Speak');
          }
          this.products.push({
            "id": "1001",
            "name": this.langformat2,
            "ability":this.languagesability2
          });
        }
        if( this.personalformat['languages3'] !=null && this.personalformat['languages3'] !='' ){
          this.langformat3={
            name:this.personalformat['languages3'],
            code:this.personalformat['languages3']
          }
          if(this.personalformat['languagesread3'] !=null){
            this.languagesability3.push('Read');
          }
          if(this.personalformat['languagewrite3'] !=null){
            this.languagesability3.push('Write');
          }
          if(this.personalformat['languagespeak3'] !=null){
            this.languagesability3.push('Speak');
          }
          this.products.push({
            "id": "1002",
            "name": this.langformat3,
            "ability":this.languagesability3
          });
        }
        
       
        this.personalform.get('fccastetype').setValue(this.personalformat['castetype']);
        this.personalform.get('fcsubcaste').setValue(this.personalformat['sub_caste']);
        this.personalform.get('fcheight').setValue(this.personalformat['height']);
        this.personalform.get('fcweight').setValue(this.personalformat['weight']);
        this.personalform.get('fcbloodgrp').setValue(this.personalformat['bloodgroup']);
        this.personalform.get('fcspclfeat').setValue(this.personalformat['specialfeatures']);
        this.personalform.get('fclang').setValue(this.personalformat['communicationl_description']);
        this.personalform.get('fcpersonalno').setValue(this.personalformat['personnelNo']);
        const fullname= `${this.personalformat['firstname']}.${this.personalformat['lastname']}`;
        this.personalform.get('fcfname').setValue(fullname);
        // this.personalform.get('fclname').setValue(this.personalformat['lastname']);
      }
    })
    this.apiservice.geteducationalData(result).then((result)=>{
      if(result !=null){
        this.educationform=result;
      }
    })
   
   
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ChangedialogComponent, {
      width:'500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // if (result !== undefined) {
      //   this.animal.set(result);
      // }
    });
  }

  past(event) {
    
    const inputText = event.target.value;
    const regex = /^[a-zA-Z0-9 ]*$/; // Regex to allow only alphanumeric and spaces

    if (!regex.test(inputText)) {
      // Only keep valid characters (alphanumeric + space)
      const validValue = inputText.replace(/[^a-zA-Z0-9 ]/g, ''); 
      this.txtFiche2.nativeElement.value = validValue;
    }

    // Trigger change detection to ensure input is updated
    this.cdr.detectChanges();
  
  }
  toggledisable(e: number) {
    switch (e) {
      case 1:
        this.personalform.get('fcpersonalno').disable();
        this.isDisabled1 = !this.isDisabled1;
        break;
      case 2:
        this.personalform.get('fcfname').disable();
        this.isDisabled2 = !this.isDisabled2;
        break;
      case 3:
        this.personalform.get('fclname').disable();
        this.isDisabled3 = !this.isDisabled3;
        break;
      case 4:
        this.personalform.get('fcgender').disable();
        this.isDisabled4 = !this.isDisabled4;
        break;
      case 5:
        this.personalform.get('fcdate').disable();
        this.isDisabled5 = !this.isDisabled5;
        break;
      case 6:
        this.personalform.get('fcstatus').disable();
        this.isDisabled6 = !this.isDisabled6;
        break;
      case 7:
        this.personalform.get('fcbirth').disable();
        this.isDisabled7 = !this.isDisabled7;
        break;
      case 8:
        this.personalform.get('fcnationality').disable();
        this.isDisabled8 = !this.isDisabled8;
        break;
      case 9:
        this.personalform.get('fcreligion').disable();
        this.isDisabled9 = !this.isDisabled9;
        break;
      case 10:
        this.personalform.get('fccommunicationlang').disable();
        this.isDisabled10 = !this.isDisabled10;
        break;
      case 11:
        this.personalform.get('fcmaritalstat').disable();
        this.isDisabled11 = !this.isDisabled11;
        break;
      case 12:
        this.personalform.get('fccastetype').disable();
        this.isDisabled12 = !this.isDisabled12;
        break;
      case 13:
        this.personalform.get('fcsubcaste').disable();
        this.isDisabled13 = !this.isDisabled13;
        break;
      case 14:
        this.personalform.get('fcheight').disable();
        this.isDisabled14 = !this.isDisabled14;
        break;
      case 15:
        this.personalform.get('fcweight').disable();
        this.isDisabled15 = !this.isDisabled15;
        break;
      case 16:
        this.personalform.get('fcbloodgrp').disable();
        this.isDisabled16 = !this.isDisabled16;
        break;
      case 17:
        this.personalform.get('fcspclfeat').disable();
        this.isDisabled17 = !this.isDisabled17;
        break;
      case 18:
        this.personalform.get('fclang').disable();
        this.isDisabled18 = !this.isDisabled18;
        break;
    }
  }
  toggleenable(e: number) {
    switch (e) {
      case 1:
        this.personalform.get('fcpersonalno').enable();
        this.txtFiche1.nativeElement.focus();
        this.isDisabled1 = !this.isDisabled1;
        break;
      case 2:
        this.personalform.get('fcfname').enable();
        this.txtFiche2.nativeElement.focus();
        this.isDisabled2 = !this.isDisabled2;
        break;
      case 3:
        this.personalform.get('fclname').enable();
        this.txtFiche3.nativeElement.focus();
        this.isDisabled3 = !this.isDisabled3;
        break;
      case 4:
        this.personalform.get('fcgender').enable();
        // this.txtFiche4.nativeElement.focus();
        this.isDisabled4 = !this.isDisabled4;
        break;
      case 5:
        this.personalform.get('fcdate').enable();
        // this.txtFiche5.nativeElement.focus();
        this.isDisabled5 = !this.isDisabled5;
        break;
      case 6:
        this.personalform.get('fcstatus').enable();
        this.txtFiche6.nativeElement.focus();
        this.isDisabled6 = !this.isDisabled6;
        break;
      case 7:
        this.personalform.get('fcbirth').enable();
        this.txtFiche7.nativeElement.focus();
        this.isDisabled7 = !this.isDisabled7;
        break;
      case 8:
        this.personalform.get('fcnationality').enable();
        this.txtFiche8.nativeElement.focus();
        this.isDisabled8 = !this.isDisabled8;
        break;
      case 9:
        this.personalform.get('fcreligion').enable();
        this.txtFiche9.nativeElement.focus();
        this.isDisabled9 = !this.isDisabled9;
        break;
      case 10:
        this.personalform.get('fcreligion').enable();
        this.txtFiche10.nativeElement.focus();
        this.isDisabled10 = !this.isDisabled10;
        break;
      case 11:
        this.personalform.get('fcmaritalstat').enable();
        // this.txtFiche11.nativeElement.focus();
        this.isDisabled11 = !this.isDisabled11;
        break;
      case 12:
        this.personalform.get('fccastetype').enable();
        this.txtFiche12.nativeElement.focus();
        this.isDisabled12 = !this.isDisabled12;
        break;
      case 13:
        this.personalform.get('fcsubcaste').enable();
        this.txtFiche13.nativeElement.focus();
        this.isDisabled13 = !this.isDisabled13;
        break;
      case 14:
        this.personalform.get('fcheight').enable();
        this.txtFiche14.nativeElement.focus();
        this.isDisabled14 = !this.isDisabled14;
        break;
      case 15:
        this.personalform.get('fcweight').enable();
        this.txtFiche15.nativeElement.focus();
        this.isDisabled15 = !this.isDisabled15;
        break;
      case 16:
        this.personalform.get('fcbloodgrp').enable();
        this.txtFiche16.nativeElement.focus();
        this.isDisabled16 = !this.isDisabled16;
        break;
      case 17:
        this.personalform.get('fcspclfeat').enable();
        this.txtFiche17.nativeElement.focus();
        this.isDisabled17 = !this.isDisabled17;
        break;
      case 18:
        this.personalform.get('fclang').enable();
        this.txtFiche18.nativeElement.focus();
        this.isDisabled18 = !this.isDisabled18;
        break;
    }
  }
  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Language?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(
          (val) => !this.selectedProducts.includes(val)
        );
        this.selectedProducts = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Language Deleted',
          life: 3000,
        });
      },
    });
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name['code'] + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val) => val.id !== product.id);
        this.product = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Language Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name['code'].trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Language Updated',
          life: 3000,
        });
      } else {
        this.product.id = this.createId();
        this.products.push(this.product);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Language Added',
          life: 3000,
        });
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
