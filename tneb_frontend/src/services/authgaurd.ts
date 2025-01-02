import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedUser()) {
      return true; // Allow navigation if user is authenticated
    } else {
      this.router.navigate(['']); // Redirect to login page if user is not authenticated
      return false;
    }
  }
}
