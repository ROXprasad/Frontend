import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from 'src/app/prime/prime.module';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    PrimeModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[
    TableComponent
  ]
})
export class RegusedModule { }
