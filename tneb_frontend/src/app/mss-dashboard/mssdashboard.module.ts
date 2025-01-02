import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MssDashboardComponent } from './mss-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LoapplyComponent } from './loapply/loapply.component';
import { MaterialModule } from '../material/material.module';
import { AgChartsAngular } from "ag-charts-angular";
import { AuthGuard } from 'src/services/authgaurd';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from '../prime/prime.module';
import { TranslationModule } from '../modules/vocabs/i8n/translation.module';
import { RegusedModule } from '../RegUsedComponents/regused/regused.module';
const routes: Routes = [
  {
     path: '', 
    component:  MssDashboardComponent,
    children:[
      {
      path:'loapply',
      component:LoapplyComponent,
      canActivate: [AuthGuard],

    }
  ]
  },
 
  
];


@NgModule({
  declarations: [
    LoapplyComponent,
    
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
    AgChartsAngular

  ],
  exports: [RouterModule],
})
export class MssdashboardModule { }
