import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasajerosPageRoutingModule } from './pasajeros-routing.module';

import { PasajerosPage } from './pasajeros.page';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasajerosPageRoutingModule,
    RouterModule.forChild([{ path: '', component: PasajerosPage }])
  ],

  declarations: [PasajerosPage],

  exports: [PasajerosPage],
})
export class PasajerosPageModule {}
