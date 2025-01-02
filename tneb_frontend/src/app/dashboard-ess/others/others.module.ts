import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncometaxComponent } from './incometax/incometax.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslationModule } from 'src/app/modules/vocabs/i8n/translation.module';
import { MaterialModule } from 'src/app/material/material.module';
import { RegusedModule } from 'src/app/RegUsedComponents/regused/regused.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from 'src/app/prime/prime.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AuthGuard } from 'src/services/authgaurd';
import { OthersComponent } from './others.component';
import { AnnualreportComponent } from './annualreport/annualreport.component';


const routes: Routes = [
  {
    path: '',
    component: OthersComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'incometax',
        component: IncometaxComponent,
        // outlet: 'childOutlet',
        canActivate: [AuthGuard],
      },
      {
        path: 'annual',
        component: AnnualreportComponent,
        // outlet: 'childOutlet',
        canActivate: [AuthGuard],
      }
    ],
  },
];

@NgModule({
  declarations: [
    OthersComponent,
    IncometaxComponent,
    AnnualreportComponent
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
export class OthersModule { }
