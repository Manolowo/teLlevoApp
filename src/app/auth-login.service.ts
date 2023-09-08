import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthLoginService {
  private _userIsAuthenticated = false;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }
  constructor(private router: Router) { }

  login(email: string, password: string): string | boolean {
    // Verifica si el correo electrónico contiene "duoc.cl" o "duocuc.cl"
    if (email.endsWith('@duoc.cl') || email.endsWith('@duocuc.cl')) {
      // Verifica si la contraseña está vacía
      if (!password) {
        // Devuelve un mensaje de error si la contraseña está vacía
        return 'La contraseña no puede estar vacía.';
      }
      // Verifica si la contraseña cumple con los requisitos
      if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
        // Aquí puedes agregar tu lógica para verificar las credenciales del usuario
        this._userIsAuthenticated = true;
        this.router.navigateByUrl('/inside-app');
        return true;
      } else {
        // Devuelve un mensaje de error si la contraseña no cumple con los requisitos
        return 'La contraseña es invalida.';
      }
    } else {
      // Devuelve un mensaje de error si el correo electrónico no es válido
      return 'El correo electrónico no es válido. Debe ingresar con un correo institucional.';
    }
  }

  logout() {
    this._userIsAuthenticated = false;
    this.router.navigateByUrl('/auth');
  }
}

