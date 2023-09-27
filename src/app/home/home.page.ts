import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nameUser="Manolo";

  //localStorage.setItem(nombre, content)
  //this.router.navigate(['/registro'])

  enviarDatos(){
    localStorage.setItem('Nombre de usuario', this.nameUser)
   // this.router.navigate(['/login'])
  }
  eliminarDatos(){
    localStorage.removeItem('Nombre de usuario');
  }

  limpiarDatos(){
    localStorage.clear();
  }

  constructor(
    private router: Router,
    /* private activateroute: ActivatedRoute */
  ) {
    console.log('Se cargó correctamente');
  }
  ngOnInit(){ console.log('Se cargó OnInit')}
  ionViewWillEnter(){console.log('Se cargó ionViewWillEnter')}
  ionViewDidLeave (){console.log('Se cargó ionViewDidLeave')}
  ionViewDidEnter(){console.log('Se cargó ionViewDidEnter')}
  ionViewWillLeave(){console.log('Se cargó ionViewWillLeave')}
  ngOnDestroy(){console.log('Se cargó ngOnDestroy')}
  constructorr(){console.log('Se cargó constructor')}
}
