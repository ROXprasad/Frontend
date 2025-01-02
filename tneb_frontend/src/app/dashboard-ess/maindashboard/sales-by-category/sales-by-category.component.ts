import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers
} from "ng-apexcharts";
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoaderService } from 'src/app/app-loader/loader.service';
import { AuthService } from 'src/services/auth.service';
import { DahboardService } from 'src/services/dahboard.service';
import { ProductService } from 'src/services/product.service';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss'],
})
export class SalesByCategoryComponent implements OnInit {
  isMobile: boolean = false;
  newarray: any[];
  jsondata: any[] = [];
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth < 760;
  }
  contentloader:boolean=true;
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private apiservice: DahboardService,
    private authservice: AuthService,
    private loader: LoaderService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private route: Router
  ) {
    this.chartOptions = {
      series: [
        {
          name: "Series Blue",
          data: [80, 50, 30, 40, 100, 20]
        },
        {
          name: "Series Green",
          data: [20, 30, 40, 80, 20, 80]
        },
        {
          name: "Series Orange",
          data: [44, 76, 78, 13, 43, 10]
        }
      ],
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: "Radar Chart - Multi Series"
      },
      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
      }
    };
    
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 760;
    const userid = this.authservice.getuserid();
    let result = parseInt(userid);
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.contentloader = false;
  }, 3000);
    //    this.apiservice.gettailes(result).then((result)=>{
    //      if(result !=null){
    //        this.jsondata=result;
    //      }
    //    })
    //  }
  }
}
