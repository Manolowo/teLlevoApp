import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.page.html',
  styleUrls: ['./pasajeros.page.scss'],
})
export class PasajerosPage implements OnInit {

  constructor(public apiService: ApiService , private alertController: AlertController) { }

  ngOnInit() {
    this.apiService.obtenerDatosApi(); // Llama al método para obtener datos desde la API
  }
  datosViaje:any;

  

  async llevame(destino: string, auto: string, conductor: string) {
    
    const fechaSalida = new Date().toLocaleDateString();

    const datosViaje = {
      destino,
      auto,
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
}
