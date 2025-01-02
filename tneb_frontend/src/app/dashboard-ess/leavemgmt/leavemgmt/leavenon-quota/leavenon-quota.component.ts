import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { newarray } from './non-quota';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/services/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DahboardService } from 'src/services/dahboard.service';
import { AuthService } from 'src/services/auth.service';
import { LoaderService } from 'src/app/app-loader/loader.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-leavenon-quota',
  templateUrl: './leavenon-quota.component.html',
  styleUrls: ['./leavenon-quota.component.scss']
})
export class LeavenonQuotaComponent implements OnInit {
     newarray:any=newarray;
  

   constructor(
        private fb: FormBuilder,
          private productService: ProductService,
          private messageService: MessageService,
          private confirmationService: ConfirmationService,
          private apiservice: DahboardService,
          private authservice: AuthService,
          private loader: LoaderService,
          private cdr :ChangeDetectorRef,
          private dialog :MatDialog
    ) { }
  
    ngOnInit(): void {
      const userid=this.authservice.getuserid();
      let result=parseInt(userid);
      // this.apiservice.gettailes(result).then((result)=>{
      //   if(result !=null){
      //     console.log(result);
      //     this.newarray=result;
      //   }
      // })
    }
}
