import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
  Input,
  HostListener,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormGroupName,
} from '@angular/forms';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { newarray, initarray } from './employeeinfo';
import { AuthService } from 'src/services/auth.service';
import { PersonalinfoService } from 'src/services/personalinfo.service';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/app-loader/loader.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.scss'],
})
export class EmployeeinfoComponent implements OnInit, AfterViewInit {
  @ViewChild('tabgroup', { static: false }) tabGroup: MatTabGroup;
  fileNames: string[] = []; // Array to store file names
  errorMessage: string = ''; 
  show: boolean;
  tabs: any;
  isHandset$: Observable<boolean>;
  newextratab: any[];
  newshowtab: any[];
  public selectedIndexBinding: number = 0;
  images: any[] = []; // Your byte arrays go here
  imageUrls: string ;
  @Input()
  overlapTrigger: boolean;
  ExtraTab: any = newarray;
  photoUrl: string | ArrayBuffer | null = null; // To display the captured photo as a preview
  binaryData: Uint8Array | null = null; // T
  // : number;
  step = 0;
  name: any;
  gender: any;
  dob: any;
  state: any;
  specialfeatures: any;
  bloodgroup: any;
  doj: any;
  dor: any;
  image: any;
  isMobile: boolean = false;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }
   @HostListener('window:resize', ['$event'])
      onResize(event: any) {
        this.isMobile = window.innerWidth < 760;
      }

  prevStep() {
    this.step--;
  }
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private apiservice: PersonalinfoService,
    private authservice: AuthService,
    protected translate: TranslateService,
    private loader: LoaderService,
    private breakpointObserver: BreakpointObserver
  ) {
  
  }
  ngAfterViewInit() {
    this.isMobile = window.innerWidth < 760; 
    setTimeout(() => {
      this.tabGroup.selectedIndex = this.selectedIndexBinding;
      this.tabGroup.realignInkBar();
    });
  }
  ngAfterViewChecked() {
    setTimeout(() => {
      this.tabGroup.selectedIndex = this.selectedIndexBinding;
      this.tabGroup.realignInkBar();
    });
  }
  ngOnInit(): void {
    // this.loadImages();
    this.isHandset$ = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
      map(result => result.matches)
    );
    const userid=this.authservice.getuserid();
    let result=parseInt(userid);
    // this.loader.show();
    this.apiservice.getpersonalData(result).then((result)=>{
      if(result !=null){
        this.name=result.firstname + ' '+result.lastname;
        this.dob=result.birthdate;
        // this.dor=result.endDate;
        // this.doj=result.startDate;
        this.gender=result.gender_description;
       
        this.state=result.state_description;
        this.specialfeatures=result.specialfeatures;
        this.bloodgroup=result.bloodgroup;
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
    this.apiservice.getDatespec(result).then((result)=>{
      // this.loader.hide();
      if(result !=null){
    
        this.dor=result.dateTy1;
      }
    });
    this.apiservice.getactiondetails(result).then((result)=>{
      // this.loader.hide();
      if(result !=null){
    
        this.doj=result.startDate;
      }
    });
    this.tabsGroup(initarray);
  }

  // async loadImages() {
  //   for (const byteArray of this.images) {
  //     const base64Url = await this.convertByteArrayToBase64(byteArray);
  //     this.imageUrls.push(base64Url);
  //   }
  // }

  // convertByteArrayToBase64(byteArray: Uint8Array): Promise<string> {
  //   const blob = new Blob([byteArray], { type: 'image/jpeg' });
  //   const reader = new FileReader();
  //   reader.readAsDataURL(blob);

  //   return new Promise<string>((resolve) => {
  //     reader.onloadend = () => {
  //       resolve(reader.result as string);
  //     };
  //   });
  // }
 // Handle file input change event
 
 onFileChange(event: any): void {
  const files = event.target.files; // Get all the selected files

  if (files.length === 0) {
    return;
  }

  this.errorMessage = ''; // Clear any previous error messages
  this.fileNames = []; // Clear the existing file names

  // Loop through the selected files and validate
  for (const file of files) {
    // File size validation (limit to 2MB)
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes
    if (file.size > maxSize) {
      this.errorMessage = 'One or more files exceed the 2MB size limit.';
      return;
    }

    // Aspect ratio validation (passport size photo should have 3:4 ratio)
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e: any) => {
      img.src = e.target.result;
    };

    img.onload = () => {
      // Check aspect ratio
      const aspectRatio = img.width / img.height;

      // Passport photo should be roughly 3:4 (width:height ratio)
      if (aspectRatio < 0.7 || aspectRatio > 0.8) {
        this.errorMessage = 'The aspect ratio must be close to 3:4 (passport size photo).';
        return;
      }

      // If validation passes, add the file name to the list
      this.fileNames.push(file.name); // Push the file name to the array
    };

    // Read the file as Data URL (base64) to trigger the image load
    reader.readAsDataURL(file);
  }
}
  tabsGroup(input) {
    this.tabs = input;
  }
  changeTab(item) {
    this.newextratab = this.ExtraTab.filter((e) => e.key !== item);
    this.ExtraTab = [];
    this.ExtraTab = this.newextratab;
    const input = {
      key: item,
      Value: item,
    };
    this.newshowtab = this.tabs.pop();
    this.newextratab.unshift(this.newshowtab);
    this.tabs.unshift(input);
    if (this.tabGroup.selectedIndex == 0) {
      this.tabGroup.realignInkBar();
      this.tabGroup.selectedIndex -= 1;
    } else {
      this.tabGroup.selectedIndex = 0;
    }
    this.selectedIndexBinding = 0;
    this.tabGroup.realignInkBar();
    this.cdr.detectChanges();
  }
}
