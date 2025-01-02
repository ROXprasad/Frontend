import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexDataLabels,
  ApexTheme,
  ApexYAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoaderService } from 'src/app/app-loader/loader.service';
import { AuthService } from 'src/services/auth.service';
import { DahboardService } from 'src/services/dahboard.service';
import { ProductService } from 'src/services/product.service';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  theme: ApexTheme
};

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  
     isMobile: boolean = false;
    newarray: any[];
    jsondata: any[]=[];
      @HostListener('window:resize', ['$event'])
      onResize(event: any) {
        this.isMobile = window.innerWidth < 760;
      }
      contentloader:boolean=true;
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  
    constructor(
       private fb: FormBuilder,
              private productService: ProductService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private apiservice: DahboardService,
              private authservice: AuthService,
              private loader: LoaderService,
              private cdr :ChangeDetectorRef,
              private dialog :MatDialog,
              private route :Router,
    ) {
      this.chartOptions = {
        series: [
          {
            name: "Product1",
            data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: "Product2",
            data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: "Product3",
            data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: "Product4",
            data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
              min: 10,
              max: 60
            })
          }
        ],
        chart: {
          height: 350,
          type: "bubble"
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: "gradient"
        },
        title: {
          text: "3D Bubble Chart"
        },
        xaxis: {
          tickAmount: 12,
          type: "datetime",
          labels: {
            rotate: 0
          }
        },
        yaxis: {
          max: 70
        },
        theme: {
          palette: "palette2"
        }
      };
    }
  
    public generateData(baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
  
        series.push([baseval, y, z]);
        baseval += 86400000;
        i++;
      }
      return series;
    }

    ngOnInit(): void {
      this.isMobile = window.innerWidth < 760; 
       const userid=this.authservice.getuserid();
      let result=parseInt(userid);
      // this.apiservice.gettailes(result).then((result)=>{
      //   if(result !=null){
      //     this.jsondata=result;
      //     this.updateChartData(result)
      //   }
      // })
      setTimeout(()=>{                           // <<<---using ()=> syntax
        this.contentloader = false;
    }, 3000);
    }
   

}
