import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginServiceService } from './login-service.service';
import { IdleService } from './idle.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  tokenKey: any = 'TOKEN';
  date : any;
  userid: string;

  constructor(private cookieService: CookieService,private loginservice:LoginServiceService,private route: Router) { 
    // Check if user is already logged in when the AuthService is initialized
    this.isAuthenticated =  this.cookieService.get('authenticated') === 'true';
  
  }

  login(username: string, password: string): boolean {
    // Implement login logic, e.g., call an API to verify credentials
    // Set isAuthenticated to true if login successful
    if (username == 'sarath' && password == '12345') {
      this.isAuthenticated = true;
      this.cookieService.set('authenticated', 'true', undefined, '/'); // Store authentication status in cookie
    }
    return this.isAuthenticated;
  }
  setToken(token: string): void {
    // sessionStorage.setItem(this.tokenKey, token);
    var date = new Date();
    var minutes = 0.5;
    date.setTime(date.getTime() + (minutes * 60 * 1000)); 
    this.isAuthenticated=true;  
    this.cookieService.set('authenticated', 'true', undefined, '/');
    this.cookieService.set(this.tokenKey,token,{expires:date});
  }
  setstoken(token: string):void{
    sessionStorage.setItem('token',token);
  }
  setuserid(token: string): void {
    sessionStorage.setItem('userid',token);
    
  }
  getstoken():string |null{
    return sessionStorage.getItem('token');
  }
  getuserid(): string | null {
    return sessionStorage.getItem('userid');
  }
  setApi(api:string):void{
    sessionStorage.setItem('API',api);
  }
  getApi():string | null{
    return sessionStorage.getItem('API');
  }

  getToken(): string | null {
    // return sessionStorage.getItem(this.tokenKey);
    return this.cookieService.get(this.tokenKey);
  }

  removeToken(): void {
    sessionStorage.removeItem(this.tokenKey);
  }
  
  logout(): void {
    this.route.navigate(['']); 
    this.isAuthenticated = false;
    localStorage.setItem('refresh','false');
    this.cookieService.set('authenticated', 'false', { expires: new Date() }); // Set cookie to 'false'
    this.cookieService.delete('authenticated', '/'); // Delete cookie
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

}
