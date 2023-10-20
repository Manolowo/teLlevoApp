import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent  implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {}

  async mostrarAlertaSalir() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Desea cerrar sesión o salir de la aplicación?',
      buttons: [
        {
          text: 'Cerrar Sesión',
          handler: () => {
            console.log('Se cerró la sesión');
            this.router.navigate(['/login']);
          }
        },
        {
          text: 'Salir',
          handler: () => {
            console.log('Se salió de la aplicación');
            window.close();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
  
    await alert.present();

  }

}
