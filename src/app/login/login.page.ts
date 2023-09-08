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
  email: string = '';
  password: string = '';

  constructor(private authLoginService: AuthLoginService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async onLogin() {
    const result = this.authLoginService.login(this.email, this.password);
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
}
