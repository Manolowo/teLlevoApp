import { Component, OnInit } from '@angular/core';

import { AuthLoginService } from '../auth-login.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string= '';
  email: string = '';
  password: string = '';

  constructor(private authLoginService: AuthLoginService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async onLogin() {
    const result = this.authLoginService.login(this.user, this.email, this.password);
    if (typeof result === 'string') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: result,
        buttons: ['OK']
      });
      await alert.present();
    }else {
      // Navega a la página "inicio" si el resultado es verdadero
      this.router.navigateByUrl('/inicio');
    }

  }

  async onForgotPassword() {
    // Verifica si el campo de correo electrónico está vacío
    if (!this.email) {
      // Muestra una alerta si el campo de correo electrónico está vacío
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe ingresar su correo electrónico para recuperar su contraseña.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Aquí puedes agregar tu lógica para enviar un correo electrónico al usuario
      // ...
  
      // Muestra una alerta para informar al usuario que se ha enviado un correo electrónico
      const alert = await this.alertController.create({
        header: 'Correo enviado',
        message: 'Se ha enviado un correo electrónico a su dirección para recuperar su contraseña.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
  

}
