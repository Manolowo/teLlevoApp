import { Injectable } from '@angular/core';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class AuthLoginService {
  private _userIsAuthenticated = false;
  private _username: string = '';

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }
  get username() {
    return this._username;
  }

  constructor(private router: Router) { }

  login(user: string, email: string, password: string): string | boolean {
    // Verifica si el nombre de usuario está vacío
    if (!user) {
      return 'El nombre de usuario no puede estar vacío.';
    }
    // Verifica si el nombre de usuario tiene menos de 3 caracteres
    if (user.length < 3) {
      return 'El nombre de usuario debe tener al menos 3 caracteres.';
    }
    // Verifica si el nombre de usuario contiene solo letras
    if (!/^[a-zA-Z]+$/.test(user)) {
      return 'El nombre de usuario solo puede contener letras.';
    }
    // Verifica si el correo electrónico contiene "duoc.cl" o "duocuc.cl"
    if (email.endsWith('@duoc.cl') || email.endsWith('@duocuc.cl')) {
      // Verifica si la contraseña está vacía
      if (!password) {
        return 'La contraseña no puede estar vacía.';
      }
      // Verifica si la contraseña cumple con los requisitos
      if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
        // Aquí puedes agregar tu lógica para verificar las credenciales del usuario
        this._userIsAuthenticated = true;
        this._username = user;
        this.router.navigateByUrl('/inside-app');
        return true;
      } else {
        return 'La contraseña es invalida.';
      }
    } else {
      return 'El correo electrónico no es válido. Debe ingresar con un correo institucional.';
    }
  }
  logout() {
    this._userIsAuthenticated = false;
    this.router.navigateByUrl('/auth');
  }
}

