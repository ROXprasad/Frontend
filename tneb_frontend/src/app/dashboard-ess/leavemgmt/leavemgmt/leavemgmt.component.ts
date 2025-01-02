import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/app-loader/loader.service';
import { AuthService } from 'src/services/auth.service';
import { PersonalinfoService } from 'src/services/personalinfo.service';
import { initarray,newarray } from './leavemgmt';
@Component({
  selector: 'app-leavemgmt',
  templateUrl: './leavemgmt.component.html',
  styleUrls: ['./leavemgmt.component.scss']
})
export class LeavemgmtComponent implements OnInit {
  step = 0;
  
  show: boolean;
  tabs: any;
  newextratab: any[];
  newshowtab: any[];
  public selectedIndexBinding: number = 0;
  images: any[] = []; // Your byte arrays go here
  imageUrls: string ;
  @Input()
  overlapTrigger: boolean;
  ExtraTab: any = newarray;
  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private apiservice: PersonalinfoService,
    private authservice: AuthService,
    protected translate: TranslateService,
    private loader: LoaderService,) { }

  ngOnInit(): void {
  }


}
