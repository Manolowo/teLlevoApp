import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api/api.service';
import { AlertController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.page.html',
  styleUrls: ['./pasajeros.page.scss'],
})
export class PasajerosPage implements OnInit {

  constructor(public apiService: ApiService , private alertController: AlertController) { }

  conductores: any[] = [];
  mostrarMapa: boolean = false;

  ngOnInit() {
    this.apiService.getConductores().subscribe(data => {
      this.conductores = data.conductores;
    });
  }

  datosViaje:any;

  

  async llevame(destino: string, auto: string, patente:string, conductor: string) {
    
    const fechaSalida = new Date().toLocaleDateString();

    const datosViaje = {
      destino,
      auto,
      patente,
      conductor,
      fechaSalida
    };

    localStorage.setItem('datosViaje', JSON.stringify(datosViaje));

    const alert = await this.alertController.create({
      header: 'Transporte Pedido',
      message: 'El transporte ha sido pedido correctamente.',
      buttons: ['OK']
    });

    await alert.present();
  }

  mostrarUbicacion(latitud: number, longitud: number) {
    mostrarUbicacionJS(latitud, longitud,  () => this.cerrarMapa());
    this.mostrarMapa = true;
  }

  cerrarMapa() {
    this.mostrarMapa = false;
    console.log('Cerrar mapa');
  }

}

declare function mostrarUbicacionJS(latitud: number, longitud: number, cerrarMapa: () => void): void;
