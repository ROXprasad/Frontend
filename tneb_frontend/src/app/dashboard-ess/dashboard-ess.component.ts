import { Component,ChangeDetectorRef, HostListener, OnInit, ElementRef } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { AuthService } from 'src/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHandleService } from 'src/services/api-handle.service';
import { ErrorHandleComponent } from '../error-handle/error-handle.component'; 
import { MatDialog } from '@angular/material/dialog';
import { ViewChild,ViewContainerRef } from '@angular/core';
import { LoadcomponentService } from 'src/services/loadcomponent.service';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
import { PersonalinfoService } from 'src/services/personalinfo.service';

interface FoodNode {
  name: string;
  children?: FoodNode[];
  componentName?: string;
  routerpath?:string;
  icon?:string;
  breadcrumps?:string
}

// interface IData {
//   month: string;
//   avgTemp: number;
//   iceCreamSales: number;
// }

const TREE_DATA: FoodNode[] = [
  {
    name: 'Self Services',
    children: [
      { name: 'Employee Self Service Portal',componentName:'Employeeselfportal',routerpath:'/essdashboard/selfservice/employeeinfo',icon:'supervisor_account',breadcrumps:'/ Self Services / EmployeeselfServicePortal'},
    
    ],
  },
  {
    name: 'Leave Management',
    children: [
      {name:'Leave Apply',componentName:'LeavemgmtComponent',routerpath:'/essdashboard/leavemanagement/leaveapply',icon:'local_library',breadcrumps:'/ Leave Management / Leave Apply'},
      {name:'Leave Balance',componentName:'LeavemgmtComponent',routerpath:'/essdashboard/leavemanagement/leavebalance',icon:'corporate_fare',breadcrumps:'/ Leave Management / Leave Balance'},
     
    ],
  },
  {
    name: 'Loans & Advance',
    children: [{name:'Festival Advance',componentName:'AdvancesComponent',routerpath:'/essdashboard/advance/festivaladv',icon:'snippet_folder',breadcrumps:'/ Loans & Advance / Festival Advance'}],
  },
  {
    name: 'Others',
    children: [
      {name:'Income Tax',componentName:'Incometax Component',routerpath:'/essdashboard/others/incometax',icon:'balance',breadcrumps:'/ Others / IncomeTax'},
      {name:'Annual Report',componentName:'Annual Report',routerpath:'/essdashboard/others/annual',icon:'candlestick_chart',breadcrumps:'/ Others / Annual Report'}
    ],
  },
];
/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  componentName?: string;
  routerpath?:string;
  icon?:string;
  breadcrumps?:string;
}

interface IData {
  month: string;
  avgTemp: number;
  iceCreamSales: number;
}

@Component({
  selector: 'app-dashboard-ess',
  templateUrl: './dashboard-ess.component.html',
  styleUrls: ['./dashboard-ess.component.scss']
})
export class DashboardEssComponent  implements OnInit{
  badgevisible = false;
  userid: string;
  isMobile: boolean = false;
  breadcrumps:any;
  name: string;
  badgevisibility() {
    this.badgevisible = true;
  }
  @ViewChild('tree') tree;
  @ViewChild('drawer') drawer;
  @ViewChild('contentDiv') contentDiv: ElementRef;
  @ViewChild('bread') bread: ElementRef;
  showFiller = false;
  public options:any;
  public optionspie:any;
  public optionsLine:any;
  activeNode:any;
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: true }) dynamicComponentContainer!: ViewContainerRef;

  private _transformer = (node: FoodNode, level: number): ExampleFlatNode => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      componentName: node.componentName,
      routerpath:node.routerpath,
      icon:node.icon,
      breadcrumps:node.breadcrumps
    };
  };


  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,   
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < 768;
  }
  image: any;
  imageUrls: string ;

  constructor(private authService: AuthService,  private apiservice: PersonalinfoService,
           private authservice: AuthService,private router: Router,private apiService:ApiHandleService,private dynamicComponentLoader: LoadcomponentService,
    private dialog: MatDialog,private cookieservice:CookieService,private cdr:ChangeDetectorRef,private location:Location,private route: ActivatedRoute,) {
    this.dataSource.data = TREE_DATA;
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
  }
  ngOnInit() {
    this.isMobile = window.innerWidth < 768;
  }
  onDrawerOpened() {
    this.contentDiv.nativeElement.classList.add('container');
  }
  storeRouterPath(node){
    sessionStorage.setItem('Route',node.breadcrumps);
  }
  ngDoCheck(): void {
    this.breadcrumps= sessionStorage.getItem('Route');
  }
  onDrawerClosed() {
    if(!this.isMobile){
      this.contentDiv.nativeElement.classList.remove('container');
    }
    this.bread.nativeElement.classList.remove('container')
  }

  ngAfterViewInit() {
    
  }
  routelogin(){
    this.router.navigateByUrl('/essdashboard/dashboard');
    sessionStorage.setItem('Route','');
    this.cdr.detectChanges();

  }
 
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  logout(){
    this.authService.logout();
    localStorage.setItem('refresh','false');
    this.cookieservice.deleteAll;
    this.router.navigate(['']); 
    sessionStorage.clear();
    this.cdr.detectChanges();
  }
  toggleNode(node: ExampleFlatNode) {
    const isExpanded = this.treeControl.isExpanded(node);
    
    // Collapse all nodes
    this.treeControl.dataNodes.forEach(n => this.treeControl.collapse(n));
    
    // If it was not expanded, expand it
    if (isExpanded) {
      this.treeControl.expand(node);
      this.cdr.detectChanges();
    }
  }
  logouts(){
    this.authService.logout();
    localStorage.setItem('refresh','false');
    this.router.navigate(['']); 
    sessionStorage.clear();
    this.cdr.detectChanges();
  }
  // loadComponent(componentName?: string,node?: ExampleFlatNode) {
  //   if (componentName) {
  //     this.activeNode = node;
  //     this.router.navigateByUrl(node.routerpath);
  //     // this.dynamicComponentLoader.loadComponent(componentName, this.dynamicComponentContainer);
  //     this.cdr.detectChanges();

  //   } else {
  //     console.error('Component name is undefined');
  //   }
  // }


  getData(){
   let autToken = this.authService.getToken();
   this.cdr.detectChanges();
   this.apiService.getData(autToken).subscribe(resp=>{
    console.log(resp,"getData")
   },error => {
    // Handle error (e.g., show an error message)
    console.error('getData', error);
    let ERROR =error;
    this.dialog.open(ErrorHandleComponent, {
      data: { message: error ,'token_expired':'Token has been expired please Relogin'},
    });
  })
  this.cdr.detectChanges();
  }
  isNodeExpanded(node: ExampleFlatNode): boolean {
    return this.treeControl.isExpanded(node);
  }
}
