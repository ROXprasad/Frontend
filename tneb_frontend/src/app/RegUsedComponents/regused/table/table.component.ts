import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { Customer } from './table';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../Sevices/CustomerService';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers:[CustomerService]

})
export class TableComponent implements OnInit {

  GetData :any
  customers!: Customer[];

    constructor(private customerService: CustomerService) {
        this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));

    }

    ngOnInit() {
    }

}
