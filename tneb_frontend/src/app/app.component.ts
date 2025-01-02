import { Component, OnInit } from '@angular/core';
import { IdleService } from 'src/services/idle.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginServiceService } from 'src/services/login-service.service';
import { Router } from '@angular/router';
import { locale as enLang } from './modules/vocabs/i8n/en';
import { TranslationService } from './modules/vocabs/i8n/translation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TNEB';
  private isAuthenticated: boolean = false;
  idles:boolean=false;
  awake:boolean =false;
  constructor(private idle:IdleService,private cookieService: CookieService,private router: Router,private loginservice:LoginServiceService,private translationService: TranslationService,){
    idle.idle$.subscribe(s => this.idles=true,);
    idle.wake$.subscribe(s => this.awake=true);
    this.isAuthenticated = !!this.cookieService.get('authenticated');
    this.translationService.loadTranslations(
      enLang,
    );
  }
  ngOnInit(): void {
    
  }
//  ngDoCheck(): void {
//   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
//   //Add 'implements DoCheck' to the class.
//   if(this.idles ==true){
//     this.isAuthenticated = false;
//     this.cookieService.delete('authenticated', '/'); 
//     this.router.navigateByUrl('');
//   }
  
//  }
 isAuthenticatedUser(): boolean {
  return this.isAuthenticated;
}
}
