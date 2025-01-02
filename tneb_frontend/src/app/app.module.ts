import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { smscomponent } from './componentBox';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmsContainerComponent } from './sms-container/sms-container.component';
import { Emailcomponent } from './componentBox';
import { callcomponent } from './componentBox';
import { admincomponent } from './componentBox';
import { AuthGuard } from 'src/services/authgaurd';
import { UserDetailsComponent } from './user-details/user-details.component'
import { ReactiveFormsModule } from '@angular/forms';
import { LeaveApplicationComponent } from './leave-application/leave-application.component'; // Import ReactiveFormsModule
import { DashboardEssComponent } from './dashboard-ess/dashboard-ess.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { ChartsComponent } from './charts/charts.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { AgChartsAngularModule } from 'ag-charts-angular'; // Import AgChartsAngularModule
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { AgChartsAngular } from "ag-charts-angular";
import { MatSidenavModule } from '@angular/material/sidenav';  // <-- Import this module
import { MatMenuModule } from '@angular/material/menu';  // <-- Import this module
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { MssDashboardComponent } from './mss-dashboard/mss-dashboard.component';
import { AppleComponent } from './apple/apple.component';
import { AppLoaderComponent } from './app-loader/app-loader.component';
import { UseridleComponent } from './useridle/useridle.component';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderpercentageComponent } from './loaderpercentage/loaderpercentage.component';
import { MaterialModule } from './material/material.module';
import { MssdashboardModule } from './mss-dashboard/mssdashboard.module';
import { DashboardModule } from './dashboard-ess/dashboard.module';
import { PrimeModule } from './prime/prime.module';
import { RegusedModule } from './RegUsedComponents/regused/regused.module';
import { DialogcomponentComponent } from './dialogcomponent/dialogcomponent.component';
import { RegisterComponent } from './register/register.component';
import { TranslationModule } from './modules/vocabs/i8n/translation.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SmsContainerComponent,
    smscomponent,
    Emailcomponent,
    callcomponent,
    admincomponent,
    UserDetailsComponent,
    LeaveApplicationComponent,
    LoanApplicationComponent,
    DashboardEssComponent,
    ChartsComponent,
    ErrorHandleComponent,
    MssDashboardComponent,
    AppleComponent,
    AppLoaderComponent,
    UseridleComponent,
    LoaderpercentageComponent,
    DialogcomponentComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    TranslateModule.forRoot(),
    TranslationModule,
    MaterialModule,
    MatSidenavModule,
    MatMenuModule,
    MatTreeModule,
    PrimeModule,
    MatIconModule,
    MssdashboardModule,
    AgChartsAngularModule,
    AgChartsAngular,
    HttpClientModule,
    MatDialogModule,
    DashboardModule,
    RegusedModule,
    FullCalendarModule,
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
