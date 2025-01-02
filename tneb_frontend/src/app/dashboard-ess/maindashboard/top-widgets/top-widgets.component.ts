import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { newarray } from './top-widgets';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/services/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PersonalinfoService } from 'src/services/personalinfo.service';
import { AuthService } from 'src/services/auth.service';
import { LoaderService } from 'src/app/app-loader/loader.service';
import { MatDialog } from '@angular/material/dialog';
import { DahboardService } from 'src/services/dahboard.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements OnInit {

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
        private dialog :MatDialog,
        private route :Router,
  ) { }
  contentloader:boolean=true;


  ngOnInit(): void {
    // const userid=this.authservice.getuserid();
    // let result=parseInt(userid);
    // this.apiservice.gettailes(result).then((result)=>{
    //   if(result !=null){
    //     console.log(result);
    //     this.newarray=result;
    //   }
    // })
    const userid=this.authservice.getuserid();
    let result=parseInt(userid);
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.contentloader = false;
  }, 3000);
  }
  storeRouterPath(e){
    console.log(e);
    this.route.navigate(['/essdashboard/leavemanagement/leavebalance']);
    sessionStorage.setItem('Route','/ Leave Management / Leave Balance')
  }

}
