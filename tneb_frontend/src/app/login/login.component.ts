import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { LoginServiceService } from 'src/services/login-service.service';
import { ErrorHandleComponent } from '../error-handle/error-handle.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiHandleService } from 'src/services/api-handle.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoaderService } from '../app-loader/loader.service';
import { RegisterComponent } from '../register/register.component';
import { listofinfo } from './login';
import { MessageService } from 'primeng/api';
import { ToastService } from 'src/services/toast.service';
import { StrongPasswordRegx } from './login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  imagePath: any =
    '/assets/imgonline-com-ua-ReplaceColor-1XEgo86UpLqSa-removebg-preview.png';
  selectedValue: any;
  shade1: any = '#F2E318';
  shade2: any = '#5B841E';
  fontColor: any = '';
  Username: any = 'EmployeeId';
  password: any;
  loginForm: any = FormGroup;
  registerform: any = FormGroup;
  showPassword: boolean = false;
  submitted = false;
  show: boolean = true;
  register: any;
  params: string;
  name = new FormControl();
  passwords = new FormControl();
  agree = new FormControl();
  issubmitted: boolean = false;
  information: any = listofinfo;
  @ViewChild('txtFiche') txtFiche: ElementRef;
  userid: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loginservice: LoginServiceService,
    private dialog: MatDialog,
    private apiService: ApiHandleService,
    private fb: FormBuilder,
    private loader: LoaderService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef,
    private toastService: ToastService
  ) {
      if(localStorage.getItem('refresh')!=='true'){
        window.location.reload();
        localStorage.setItem('refresh','true');
      }
    document.documentElement.style.setProperty(
      '--custom-gradient',
      `linear-gradient(150deg, ${this.shade1}  100%, ${this.shade2} 100%)`
    );
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{8}$/),
      ]),
      passwords: new FormControl('', [
        Validators.required,
        Validators.pattern(StrongPasswordRegx),
      ]),
      agree: new FormControl('Employee', [Validators.required]),
    });
  }

  changeId(userId: any) {
    this.Username = userId;
  }
  // past(event) {

  //   const inputText = event.target.value;
  //   const regex = StrongPasswordRegx;
  //   if (!regex.test(inputText)) {
  //     this.txtFiche.nativeElement.value = '';
  //   }
  //   this.cdr.detectChanges();
  // }

  onSubmit() {
    const isFormValid = this.loginForm.valid;

    if (isFormValid == true) {
      const userLogin = this.loginForm.value;
      const input ={
        "username":this.loginForm.value.name.toString(),
        "password":this.loginForm.value.passwords
      }
      this.userid=input.username;
      this.loader.show();
      this.apiService.authenticate(input).subscribe({
        next: (response) => {
          this.authService.setuserid(this.userid)
          this.authService.setstoken(response.token)
            this.loader.hide();
            this.authService.setToken(response.token);
            console.log(this.authService.getToken());
            const route =
              this.Username === 'EmployeeId'
                ? '/essdashboard/dashboard'
                : this.Username === 'PositionId'
                ? '/mssdashbaord'
                : null;
            this.router.navigate([route]);
            this.cdr.detectChanges();
        
        },
        error: (error) => {
          this.loader.hide();
          console.error('Authentication failed', error);
          this.dialog.open(ErrorHandleComponent, {
            data: { message: error },
          });
        },
      });
    } else {
      this.issubmitted = true;
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; // Toggle the showPassword property
  }

  toggle() {
    this.clear();
    const dialogref=this.dialog.open(RegisterComponent, {
      width: '350px',
      panelClass: 'custom-dialog'
    });
    dialogref.afterClosed().subscribe((result) => {
      if(result){
        this.toastService.showMessage({
          severity: 'success',
          summary: 'Success Message',
          detail: 'Registeration Completed',
          key: 'br',
          life: 3000,
        });
      }else{
        this.toastService.showMessage({
          severity: 'warn',
          summary: 'Warning Message',
          detail: 'Registeration not Completed',
          key: 'br',
          life: 3000,
        });
      }
    
    });
  }
  clear() {
    this.loginForm.value = '';
    this.name = new FormControl();
    this.loginForm.controls['name'].setValue('');
    // this.loginForm.controls['agree'].setValue('');
    this.loginForm.controls['passwords'].setValue('');
    // this.agree = new FormControl();
    this.passwords = new FormControl();
    this.cdr.detectChanges();
  }
}
