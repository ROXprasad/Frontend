import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgidleService } from 'src/services/ngidle.service';
import { ConfigService } from 'src/services/config.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/services/auth.service';
@Component({
  selector: 'app-useridle',
  templateUrl: './useridle.component.html',
  styleUrls: ['./useridle.component.scss']
})
export class UseridleComponent implements OnInit {


  inputForm: any;
  idleTimerLeft: string;
  secondTimerLeft: string;
  timeRemain: number;
  FULL_DASH_ARRAY = 283;
  appEnvironments: string = '';
  appcolor: any;
  timerstart:any;
  timerdialog:any;
  private _config: any
  

  constructor(private ngIdle: NgidleService,private authService: AuthService, private cdr: ChangeDetectorRef, private ROUTE: Router,private CONFIGSERVICE: ConfigService,
    protected translate: TranslateService,private http:HttpClient,private cookieservice:CookieService) { 
    
    }

  ngOnInit(): void {
 
  }

  ngAfterViewInit(): void {
    this.http.get('./assets/config/app.settings.json').subscribe( (data) => {
      this._config = data;
      this.timerstart=this._config['ApplicationSettings']['TimerStart'];
      this.timerdialog=this._config['ApplicationSettings']['TimerDialog'];
      this.initTimer(this.timerstart, this.timerdialog);
  },);
  }

  /**
   * Draw timer circle
   */
  formatTimeLeft = (time: number) => {
    if (time > 0) {
      let seconds = Math.trunc(time / 1000);

      //this.setCircleDasharray(seconds);

      let min = 0;
      let smin = '0';
      let sseconds = '0';
      if (seconds >= 60) {
        min = Math.trunc(seconds / 60);
        seconds -= (min * 60);
      }

      smin = min.toString().length === 1 ? ('0' + min.toString()) : min.toString();
      sseconds = seconds.toString().length === 1 ? ('0' + seconds.toString()) : seconds.toString();

      this.cdr.detectChanges();
      return `${smin}:${sseconds}`;
    }

    return '00:00';
  }

  setCircleDasharray = (elapsedTime: number) => {
    // const inputValue: any = this.inputForm.value;
    const timeLimit = 20 * 60;

    this.timeRemain = elapsedTime / timeLimit;
    const circleDasharray = `${(
      this.timeRemain * this.FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    if (document.getElementById('base-timer-path-remaining') !== undefined && document.getElementById('base-timer-path-remaining') !== null) {
      document.getElementById('base-timer-path-remaining').setAttribute('stroke-dasharray', circleDasharray);
    }
    else {
      NgidleService.runTimer = false;
      NgidleService.runSecondTimer = false;
    }
  }


  initTimer(firstTimerValue: number, secondTimerValue: number): void {

    // Timer value initialization
    this.ngIdle.USER_IDLE_TIMER_VALUE_IN_MIN = firstTimerValue;
    this.ngIdle.FINAL_LEVEL_TIMER_VALUE_IN_MIN = secondTimerValue;
    // end

    // Watcher on timer
    this.ngIdle.initilizeSessionTimeout();
    this.ngIdle.userIdlenessChecker.subscribe((status: string) => {
      this.initiateFirstTimer(status);
    });

    this.ngIdle.secondLevelUserIdleChecker.subscribe((status: string) => {
      this.initiateSecondTimer(status);
    });

  }

  initiateFirstTimer = (status: string) => {
    switch (status) {
      case 'INITIATE_TIMER':
        break;

      case 'RESET_TIMER':
        break;

      case 'STOPPED_TIMER':
        {
          this.showSendTimerDialog();
          break;
        }
      default:
        {
          if (this.idleTimerLeft === undefined) {
            try {
               document.getElementsByClassName('placeholder-content')[0].classList.remove('placeholder-content');
              //document.querySelectorAll('.placeholder-content').forEach((item, Index) => document.querySelectorAll('.placeholder-content')[Index].classList.remove('placeholder-content'));
            }
            catch (e) {
              console.log('Exception:' + e);
            }
          }
          this.idleTimerLeft = this.formatTimeLeft(Number(status));
          break;
        }
    }
  }

  initiateSecondTimer = (status: string) => {
    switch (status) {
      case 'INITIATE_SECOND_TIMER':
        break;

      case 'SECOND_TIMER_STARTED':
        break;

      case 'SECOND_TIMER_STOPPED':
        this.logout();
        this.authService.logout();
        localStorage.setItem('refresh','false');
        this.cookieservice.deleteAll;
      
       
        break;

      default:
        {
          this.cdr.detectChanges();
          this.secondTimerLeft = status;
          break;
        }
    }
  }

  showSendTimerDialog(): void {
    const modal = document.getElementById('myModal') ;
    modal.style.display = 'block';
  }

  continue(): void {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';

    // stop second timer and initiate first timer again
    NgidleService.runSecondTimer = false;
    this.ngIdle.initilizeSessionTimeout();
  }

  logout(): void {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';

    // stop all timer and end the session
    NgidleService.runTimer = false;
    NgidleService.runSecondTimer = false;


    window.sessionStorage.clear();

    window.localStorage.clear();
    this.authService.logout();
    localStorage.setItem('refresh','false');
    this.cookieservice.deleteAll;
    
    localStorage.setItem('signOut','true');

    if(window.location.hostname.indexOf('localhost')!=0)
    {
      window.close();
      window.location.href = this.CONFIGSERVICE.getApi("SUITE_URL");
    }
    else
    {
      this.ROUTE.navigateByUrl('');
    }

  }
}
