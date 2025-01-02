import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/services/authgaurd';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { DashboardEssComponent } from './dashboard-ess/dashboard-ess.component';
import { MssDashboardComponent } from './mss-dashboard/mss-dashboard.component';
import { MssdashboardModule } from './mss-dashboard/mssdashboard.module';
import { AppleComponent } from './apple/apple.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'userDetail',
    component: UserDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'leaveApplication',
    component: LeaveApplicationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'loanApplication',
    component: LoanApplicationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'essdashboard',
      canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard-ess/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'mssdashbaord',
    loadChildren: () =>
      import('./mss-dashboard/mssdashboard.module').then(
        (m) => MssdashboardModule
      ),
       canActivate: [AuthGuard],
  },{
    path:'constructpage',
    component:AppleComponent
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
