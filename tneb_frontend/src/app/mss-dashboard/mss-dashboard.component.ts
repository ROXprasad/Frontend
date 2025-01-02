import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, HostListener, OnInit, ViewChild, ViewContainerRef,ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiHandleService } from 'src/services/api-handle.service';
import { AuthService } from 'src/services/auth.service';
import { LoadcomponentService } from 'src/services/loadcomponent.service';
import { ErrorHandleComponent } from '../error-handle/error-handle.component';

interface FoodNode {
  name: string;
  children?: FoodNode[];
  componentName?: string;
  routerpath?:string;
  icon?:string
}

// interface IData {
//   month: string;
//   avgTemp: number;
//   iceCreamSales: number;
// }

const TREE_DATA: FoodNode[] = [
  {
    name: 'Services',
    children: [
      { name: 'Charts',componentName:'Charts',routerpath:'/mssdashbaord/loapply',icon:'supervisor_account'},
    
    ],
  },
  {
    name: 'Overall Management',
    children: [{name:'Leave Quota',componentName:'LeavemgmtComponent',routerpath:'/mssdashbaord/leavemanagement',icon:'local_library'}
     
    ],
  },
  {
    name: 'Approval',
    children: [{name:''}],
  },
  {
    name: 'Others',
    children: [{name:''}],
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
}

interface IData {
  month: string;
  avgTemp: number;
  iceCreamSales: number;
}
@Component({
  selector: 'app-mss-dashboard',
  templateUrl: './mss-dashboard.component.html',
  styleUrls: ['./mss-dashboard.component.scss']
})
export class MssDashboardComponent implements OnInit {
  isMobile: boolean = false;

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < 768;
  }
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
      icon:node.icon
    };
  };


  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );
ngOnInit(): void {
  this.isMobile = window.innerWidth < 768;

}
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,   
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  userid: string;

  constructor(private authService: AuthService,private router: Router,private apiService:ApiHandleService,
    private dynamicComponentLoader: LoadcomponentService,
    private dialog: MatDialog,private cookieservice:CookieService,private cdr:ChangeDetectorRef) {
      this.dataSource.data = TREE_DATA;
    document.title = "TNEB_ESS";
    this.userid=this.authService.getuserid();
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
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  logouts(){
    this.authService.logout();
    localStorage.setItem('refresh','false');
    this.cookieservice.deleteAll;
    this.cookieservice.deleteAll;
    this.router.navigate(['']); 
  }
  
  loadComponent(componentName?: string,node?: ExampleFlatNode) {
    this.router.navigateByUrl('/mssdashbaord/loapply');
  }

  getData(){
   let autToken = this.authService.getToken();
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
  }
  isNodeExpanded(node: ExampleFlatNode): boolean {
    return this.treeControl.isExpanded(node);
  }

}
