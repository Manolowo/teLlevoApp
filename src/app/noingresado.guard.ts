import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthLoginService } from './auth-login.service';

@Injectable({
  providedIn: 'root'
})
export class NoingresadoGuard implements CanActivate {
  constructor(private authService: AuthLoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (!this.authService.userIsAuthenticated) {
      // El usuario no está autenticado, redirige a la página de inicio de sesión
      return this.router.parseUrl('/login');
    }
    return true; // Permite la navegación si el usuario NO está autenticado
  }
}

