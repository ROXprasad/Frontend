import { Component, OnInit } from '@angular/core';
import { Customer } from './anualreport';
import { ProductService } from 'src/services/product.service';
@Component({
  selector: 'app-annualreport',
  templateUrl: './annualreport.component.html',
  styleUrls: ['./annualreport.component.scss']
})
export class AnnualreportComponent implements OnInit {

  customers=Customer;

    constructor(private customerService: ProductService) {}



  cities!: any[];

    selectedCities!: any[];

    ngOnInit() {
        this.cities = [
            {name: '2000-2001', code: '2000-2001'},
            {name: '2001-2002', code: '2001-2002'},
            {name: '2002-2003', code: '2002-2003'},
            {name: '2003-2004', code: '2003-2004'},
            {name: '2004-2005', code: '2004-2005'},
            {name: '2005-2006', code: '2005-2006'},
            {name: '2006-2007', code: '2006-2007'},
            {name: '2007-2008', code: '2007-2008'},
            {name: '2008-2009', code: '2008-2009'},
            {name: '2009-2010', code: '2009-2010'},
            {name: '2010-2011', code: '2010-2011'},
            {name: '2011-2012', code: '2011-2012'},
            {name: '2012-2013', code: '2012-2013'},
            {name: '2013-2014', code: '2013-2014'},
            {name: '2014-2015', code: '2014-2015'},
            {name: '2015-2016', code: '2015-2016'},
            {name: '2016-2017', code: '2016-2017'},
            {name: '2017-2018', code: '2017-2018'},
            {name: '2018-2019', code: '2018-2019'},
            {name: '2019-2020', code: '2019-2020'},
            {name: '2020-2021', code: '2020-2021'},
            {name: '2021-2022', code: '2021-2022'},
            {name: '2022-2023', code: '2022-2023'},
            {name: '2023-2024', code: '2023-2024'},
            {name: '2024-2025', code: '2024-2025'},
           
        ];
      
    }
}
