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
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
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
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-last-few-transactions',
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.scss']
})
export class LastFewTransactionsComponent implements OnInit {
  contentloader:boolean=true;
 isMobile: boolean = false;
   newarray: any[];
   jsondata: any[] = [];
   @HostListener('window:resize', ['$event'])
   onResize(event: any) {
     this.isMobile = window.innerWidth < 760;
   }
 
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
           name: "",
           data: [200, 330, 548, 740, 880, 990, 1100, 1380]
         }
       ],
       chart: {
         type: "bar",
         height: 350
       },
       plotOptions: {
         bar: {
           horizontal: true,
           distributed: true,
           barHeight: "80%",
           colors:{
             backgroundBarRadius: 0,
           }
         }
       },
       colors: [
         "#F44F5E",
         "#E55A89",
         "#D863B1",
         "#CA6CD8",
         "#B57BED",
         "#8D95EB",
         "#62ACEA",
         "#4BC3E6"
       ],
       dataLabels: {
         enabled: true,
         formatter: function (val, opt) {
           return opt.w.globals.labels[opt.dataPointIndex];
         },
         dropShadow: {
           enabled: true
         }
       },
       title: {
         text: "Pyramid Chart",
         align: "center"
       },
       xaxis: {
         categories: [
           "Sweets",
           "Processed Foods",
           "Healthy Fats",
           "Meat",
           "Beans & Legumes",
           "Dairy",
           "Fruits & Vegetables",
           "Grains"
         ]
       },
       legend: {
         show: false
       }
     };
     
   }
 
   ngOnInit(): void {
     this.isMobile = window.innerWidth < 760;
     const userid = this.authservice.getuserid();
     let result = parseInt(userid);
     //    this.apiservice.gettailes(result).then((result)=>{
     //      if(result !=null){
     //        this.jsondata=result;
     //      }
     //    })
     //  }
        // })
        setTimeout(()=>{                           // <<<---using ()=> syntax
          this.contentloader = false;
      }, 3000);
   }

}
