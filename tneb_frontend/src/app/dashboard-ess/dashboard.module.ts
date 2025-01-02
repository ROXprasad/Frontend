import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEssComponent } from './dashboard-ess.component';
import { MaterialModule } from '../material/material.module';
import { RegusedModule } from '../RegUsedComponents/regused/regused.module';
import { AuthGuard } from 'src/services/authgaurd';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from '../prime/prime.module';

import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { TopWidgetsComponent } from './maindashboard/top-widgets/top-widgets.component';
import { LeavecalendarComponent } from './maindashboard/leavecalendar/leavecalendar.component';
import { SalesByCategoryComponent } from './maindashboard/sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from './maindashboard/last-few-transactions/last-few-transactions.component';
import { TopThreeProductsComponent } from './maindashboard/top-three-products/top-three-products.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LeavemoduleModule } from './leavemgmt/leavemgmt/leavemodule.module';
import { SelfserviceComponent } from './selfservice/selfservice.component';
import { SelfserviceModule } from './selfservice/selfservice.module';
import { TranslationModule } from '../modules/vocabs/i8n/translation.module';
import { AdvanceModule } from './advances/advance.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProfileComponent } from './maindashboard/profile/profile.component';
import { AttendanceComponent } from './maindashboard/attendance/attendance.component';
import { OthersModule } from './others/others.module';
const routes: Routes = [
  {
     path: '', 
    component:  DashboardEssComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'dashboard',
        component:MaindashboardComponent,
        // outlet: 'childOutlet',
        canActivate: [AuthGuard],
      },
      {
      path:'selfservice',
      canActivate: [AuthGuard],
      loadChildren: () =>
        import('./selfservice/selfservice.module').then((m) => m.SelfserviceModule),
    },{
      path:'leavemanagement',
      canActivate: [AuthGuard],
      loadChildren: () =>
        import('./leavemgmt/leavemgmt/leavemodule.module').then((m) => m.LeavemoduleModule),
    },
    {
      path:'advance',
      canActivate: [AuthGuard],
      loadChildren: () =>
        import('./advances/advance.module').then((m) => m.AdvanceModule),
    },
    {
      path:'others',
      canActivate: [AuthGuard],
      loadChildren: () =>
        import('./others/others.module').then((m) => m.OthersModule),
    }
  ]
  }
 
  
];

@NgModule({
  declarations: [
   
    MaindashboardComponent,
    TopWidgetsComponent,
    LeavecalendarComponent,
    SalesByCategoryComponent,
    LastFewTransactionsComponent,
    TopThreeProductsComponent,
    SelfserviceComponent,
    ProfileComponent,
    AttendanceComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslationModule,
    RegusedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeModule,
    FullCalendarModule,
    LeavemoduleModule,
    SelfserviceModule,
    AdvanceModule,
    NgApexchartsModule,
    OthersModule
  ]
})
export class DashboardModule { }
