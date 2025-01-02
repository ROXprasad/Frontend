import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslationModule } from 'src/app/modules/vocabs/i8n/translation.module';
import { MaterialModule } from 'src/app/material/material.module';
import { RegusedModule } from 'src/app/RegUsedComponents/regused/regused.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from 'src/app/prime/prime.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AdvancesComponent } from './advances.component';
import { FestivaladvanceComponent } from './festivaladvance/festivaladvance.component';
import { AuthGuard } from 'src/services/authgaurd';

const routes: Routes = [
  {
    path: '',
    component: AdvancesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'festivaladv',
        component: FestivaladvanceComponent,
        // outlet: 'childOutlet',
        canActivate: [AuthGuard],
      },
    ],
  },
];
@NgModule({
  declarations: [
    AdvancesComponent,
    FestivaladvanceComponent
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
export class AdvanceModule { }
