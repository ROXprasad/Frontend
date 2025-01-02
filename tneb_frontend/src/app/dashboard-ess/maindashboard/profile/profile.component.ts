import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoaderService } from 'src/app/app-loader/loader.service';
import { AuthService } from 'src/services/auth.service';
import { DahboardService } from 'src/services/dahboard.service';
import { PersonalinfoService } from 'src/services/personalinfo.service';
import { ProductService } from 'src/services/product.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isMobile: boolean;
  name: string;
  image: any;
  imageUrls: string ;
   @HostListener('window:resize', ['$event'])
     onResize(event: any) {
       this.isMobile = window.innerWidth < 760;
     }
  constructor(
    private fb: FormBuilder,
         private productService: ProductService,
         private messageService: MessageService,
         private confirmationService: ConfirmationService,
         private apiservice: PersonalinfoService,
         private authservice: AuthService,
         private loader: LoaderService,
         private cdr: ChangeDetectorRef,
         private dialog: MatDialog,
         private route: Router
  ) { }
  contentloader:boolean=true;
  ngOnInit(): void {
    this.isMobile = window.innerWidth < 760; 
    const userid=this.authservice.getuserid();  
    let result=parseInt(userid);
    // this.loader.show();
    this.apiservice.getpersonalData(result).then((result)=>{
      if(result !=null){
        this.name=result.firstname + ' '+result.lastname;
      }else{

      }
    });
    this.apiservice.getimagedetails(result).then((result)=>{
      // this.loader.hide();
      if(result !=null){
           this.image=result['value'];
          const bytes=`data:image/jpeg;base64,${this.image}`;
         this.imageUrls=bytes;
       
      }
    });
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.contentloader = false;
  }, 3000);
  }

}
