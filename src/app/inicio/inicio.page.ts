import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from '../auth-login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  datosViaje: { destino: string, auto: string, patente: string,conductor: string, fechaSalida: Date } | null = null;

  constructor(public authLoginService: AuthLoginService) {}

  ngOnInit() {
    // Recuperar datos desde el localStorage
    const datosViajeLocalStorage = localStorage.getItem('datosViaje');

    if (datosViajeLocalStorage) {
      this.datosViaje = JSON.parse(datosViajeLocalStorage); // Asignar los datos recuperados al componente
    }
  }
}

