import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { ApiService } from '../api/api.service';
import { AlertController, NavController } from '@ionic/angular'; 

declare var google: any;

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.page.html',
  styleUrls: ['./pasajeros.page.scss'],
})
export class PasajerosPage implements OnInit {

  constructor(
    public apiService: ApiService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private renderer: Renderer2 
  ) { }
  
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
    this.mostrarMapa = true;
    mostrarUbicacionJS(latitud, longitud);
  }

  cerrarMapa() {
    this.mostrarMapa = false;
    const mapContainer = this.renderer.selectRootElement('#map-modal-container');
    this.renderer.setAttribute(mapContainer, 'hidden', 'true');
  }

  ionViewWillLeave() {
    if (this.mostrarMapa) {
      this.cerrarMapa();
    }
  }

}

declare function mostrarUbicacionJS(latitud: number, longitud: number): void;
