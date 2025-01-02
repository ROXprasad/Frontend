import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationaldetailsComponent } from './employeeinfo/educationaldetails/educationaldetails.component';
import { PersonachallangesdetComponent } from './employeeinfo/personachallangesdet/personachallangesdet.component';
import { FamilydetailsComponent } from './employeeinfo/familydetails/familydetails.component';
import { AddressdetailsComponent } from './employeeinfo/addressdetails/addressdetails.component';
import { TranslationModule } from 'src/app/modules/vocabs/i8n/translation.module';
import { EmployeeorgdetComponent } from './employeeinfo/employeeorgdet/employeeorgdet.component';
import { NominationdetailsComponent } from './employeeinfo/nominationdetails/nominationdetails.component';
import { BankdetailsComponent } from './employeeinfo/bankdetails/bankdetails.component';
import { PersonalcommunComponent } from './employeeinfo/personalcommun/personalcommun.component';
import { PersonalorderComponent } from './employeeinfo/personalorder/personalorder.component';
import { PersonalpfComponent } from './employeeinfo/personalpf/personalpf.component';
import { PersonalotherstatutoryComponent } from './employeeinfo/personalotherstatutory/personalotherstatutory.component';
import { TrainingdetComponent } from './employeeinfo/trainingdet/trainingdet.component';
import { DepartmenttestComponent } from './employeeinfo/departmenttest/departmenttest.component';
import { PersonalawardsComponent } from './employeeinfo/personalawards/personalawards.component';
import { PersonalidsComponent } from './employeeinfo/personalids/personalids.component';
import { PersonaldetailsComponent } from './employeeinfo/personaldetails/personaldetails.component';
import { ChangedialogComponent } from './employeeinfo/changedialog/changedialog.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { RouterModule, Routes } from '@angular/router';
import { RegusedModule } from 'src/app/RegUsedComponents/regused/regused.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from 'src/app/prime/prime.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SelfserviceComponent } from './selfservice.component';
import { AuthGuard } from 'src/services/authgaurd';
const routes: Routes = [
  {
    path: '',
    component: SelfserviceComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'employeeinfo',
        component: EmployeeinfoComponent,
        // outlet: 'childOutlet',
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [
    EmployeeinfoComponent,
       PersonaldetailsComponent,
       EducationaldetailsComponent,
       PersonachallangesdetComponent,
       FamilydetailsComponent,
       AddressdetailsComponent,
       EmployeeorgdetComponent,
       NominationdetailsComponent,
       BankdetailsComponent,
       PersonalcommunComponent,
       PersonalorderComponent,
       PersonalpfComponent,
       PersonalotherstatutoryComponent,
       TrainingdetComponent,
       DepartmenttestComponent,
       PersonalawardsComponent,
       PersonalidsComponent,
       ChangedialogComponent

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
  ]
})
export class SelfserviceModule { }
