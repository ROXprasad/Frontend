import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavemgmtComponent } from './leavemgmt.component';
import { LeavenonQuotaComponent } from './leavenon-quota/leavenon-quota.component';
import { LeavequotaComponent } from './leavequota/leavequota.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslationModule } from 'src/app/modules/vocabs/i8n/translation.module';
import { RegusedModule } from 'src/app/RegUsedComponents/regused/regused.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from 'src/app/prime/prime.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AuthGuard } from 'src/services/authgaurd';
import { MaterialModule } from 'src/app/material/material.module';
const routes: Routes = [
  {
    path: '',
    component: LeavemgmtComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'leaveapply',
        component: LeavequotaComponent,
        // outlet: 'childOutlet',
        canActivate: [AuthGuard],
      },
      {
        path: 'leavebalance',
        component: LeavenonQuotaComponent,
        // outlet: 'childOutlet',
        canActivate: [AuthGuard],
      },
    ],
  },
];
@NgModule({
  declarations: [
    LeavemgmtComponent,
    LeavenonQuotaComponent,
    LeavequotaComponent,
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
  ],
})
export class LeavemoduleModule {}
