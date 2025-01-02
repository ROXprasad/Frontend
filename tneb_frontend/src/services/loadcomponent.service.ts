import { Injectable ,ComponentFactoryResolver,ViewContainerRef,ComponentRef} from '@angular/core';
import { ResolvedReflectiveFactory } from '@angular/core';
import { EmployeeinfoComponent } from 'src/app/dashboard-ess/selfservice/employeeinfo/employeeinfo.component';
@Injectable({
  providedIn: 'root'
})
export class LoadcomponentService {

  constructor(private resolver: ComponentFactoryResolver) { }
  loadComponent(componentName: string, viewContainerRef: ViewContainerRef) {
    let componentFactory:any;
    switch (componentName) {
      case 'Employeeselfportal':
        componentFactory = this.resolver.resolveComponentFactory(EmployeeinfoComponent);
        break;
      
      default:
        return;
    }
    // viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
