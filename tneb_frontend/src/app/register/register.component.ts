import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../app-loader/loader.service';
import { ApiHandleService } from 'src/services/api-handle.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { emailval,numberval,countryCodes } from './register';
import { ErrorHandleComponent } from '../error-handle/error-handle.component';
export const StrongPasswordRegx: RegExp =
  /^(?=[a-zA-Z])(?=.*[!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/~`-])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/~`-]{8,12}$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerform: any = FormGroup;
  submitted: boolean;
  register: any='EmployeeId';
  showPassword: boolean;
  selectedValue: any;
  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
  private apiService: ApiHandleService,
  private dialog: MatDialog,
    public dialogRef: MatDialogRef<RegisterComponent>
  ) {  this.registerform = this.fb.group({
    userid :new FormControl('',[Validators.required, Validators.pattern(/^[0-9]{8}$/)]),
    email:new FormControl('',[Validators.required,Validators.pattern(emailval)]),
    number:new FormControl('',[Validators.required,Validators.pattern(numberval)]),
    agree: new FormControl('Employee', [Validators.required]),
    passwords: new FormControl('', [
      Validators.required,
      Validators.pattern(StrongPasswordRegx),
    ]),
   });}

  ngOnInit(): void {
   
  }
  changeposId(id: any) {
    this.register = id;
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; // Toggle the showPassword property
  }
  onSubmit(){
    const isFormValid= this.registerform.valid;
    if(isFormValid == true){
       
        const input ={
        "id":0,
        "userid": this.registerform.value.userid.toString(),
        "emailid": this.registerform.value.email,
        "mobileno": this.registerform.value.number.toString(),
        "portaltype": this.register ==="EmployeeId"? 'Ess':'Mss',
        "recordstatus": "0",
        "pswrd": this.registerform.value.passwords,
        }
        this.loader.show();
        this.apiService.registerapi(input).subscribe({
          next: (response) => {
            if(response.status =="Success"){
              this.loader.hide(); 
              const dialogreturn = {key:true,value:true};
              this.dialogRef.close(dialogreturn); 
                      
            }
            else{
              this.loader.hide();
            }
            
          },
          error: (error) => {
            this.loader.hide();
            console.error('Authentication failed', error);
              this.dialog.open(ErrorHandleComponent, {
                data: { message: error },
              });
           
          },
        });
      }
      else{
        this.submitted=true;
      }
  }
  closedialog(){
    this.dialogRef.close();
  }

}
