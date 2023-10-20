import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginPage } from './login/login.page';

import { AuthLoginService } from './auth-login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {
  constructor(private authService: AuthLoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.userIsAuthenticated) {
      return true; // El usuario está autenticado, permite la navegación
    } else {
      this.router.navigate(['/login']); // Redirige al inicio de sesión si el usuario no está autenticado
      return false; // No permite la navegación
    }
  }
}
