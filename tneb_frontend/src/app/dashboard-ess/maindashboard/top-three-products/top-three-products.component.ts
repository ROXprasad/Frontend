import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexPlotOptions,
  ChartComponent
} from "ng-apexcharts";
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoaderService } from 'src/app/app-loader/loader.service';
import { AuthService } from 'src/services/auth.service';
import { DahboardService } from 'src/services/dahboard.service';
import { ProductService } from 'src/services/product.service';
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  fill: ApexFill,
  yaxis: ApexYAxis,
  stroke: ApexStroke,
  legend: ApexLegend,
  plotOptions: ApexPlotOptions
};
@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})
export class TopThreeProductsComponent implements OnInit {

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
  public chartOptionsmobile: Partial<ChartOptions>;

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
    // this.chartOptions = {
    //   series: [44, 55, 67, 83],
    //   chart: {
    //     height: 350,
    //     type: "radialBar"
    //   },
    //   plotOptions: {
    //     radialBar: {
    //       dataLabels: {
    //         name: {
    //           fontSize: "22px"
    //         },
    //         value: {
    //           fontSize: "16px"
    //         },
    //         total: {
    //           show: true,
    //           label: "Total",
    //           formatter: function(w) {
    //             return "249";
    //           }
    //         }
    //       }
    //     }
    //   },
    //   labels: ["Apples", "Oranges", "Bananas", "Berries"]
    // };
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 760; 
     const userid=this.authservice.getuserid();
    let result=parseInt(userid);
    this.apiservice.gettailes(result).then((result)=>{
      if(result !=null){
        this.jsondata=result;
        this.updateChartData(result)
      }
    })
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.contentloader = false;
  }, 3000);
  }
  updateChartData(jsonData) {
    // Extract availableBalance and leave descriptions dynamically
    const seriesData = jsonData.map(item => parseFloat(item.availableBalance));
    const labelsData = jsonData.map(item => item.absenceQuotaType_Description);
  
    // Calculate the total available balance dynamically
    const totalLeaveBalance = seriesData.reduce((acc, value) => acc + value, 0);
  
    // Define chart options dynamically
    this.chartOptions = {
      series:seriesData,
        chart: {
          width: 380,
          type: 'polarArea'
        },
        labels: labelsData,
        fill: {
          opacity: 1
        },
        stroke: {
          width: 1,
          colors: undefined
        },
        yaxis: {
          show: false
        },
        legend: {
          position: 'bottom',
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            }
          }
        },
        theme: {
          monochrome: {
            //    enabled: true,
            shadeTo: 'light',
            shadeIntensity: 0.6
          }
        }
    };
    this.chartOptionsmobile = {
      series:seriesData,
        chart: {
          width: 380,
          type: 'polarArea'
        },
        labels: labelsData,
        fill: {
          opacity: 1
        },
        stroke: {
          width: 1,
          colors: undefined
        },
        yaxis: {
          show: false
        },
        legend: {
          position: 'bottom',
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            }
          }
        },
        theme: {
          monochrome: {
            //    enabled: true,
            shadeTo: 'light',
            shadeIntensity: 0.6
          }
        }
    };
  }
}
