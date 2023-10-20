import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { NOTFOUNDPage } from './not-found/not-found.page';

import { IngresadoGuard } from './ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
    
  },
  {
    path: 'pasajeros',
    loadChildren: () => import('./pasajeros/pasajeros.module').then( m => m.PasajerosPageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./conductor/conductor.module').then( m => m.ConductorPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NOTFOUNDPageModule)
  },

];

@NgModule({
  
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: TabsComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'inicio',
          },
          {
            path: 'inicio',
            loadChildren: () => import('./inicio/inicio.module').then((m) => m.InicioPageModule),
            canActivate: [IngresadoGuard],
          },
          {
            path: 'pasajeros',
            loadChildren: () => import('./pasajeros/pasajeros.module').then((m) => m.PasajerosPageModule),
            canActivate: [IngresadoGuard],
          },
          {
            path: 'conductor',
            loadChildren: () => import('./conductor/conductor.module').then((m) => m.ConductorPageModule),
            canActivate: [IngresadoGuard],
          },

        ],
      },

      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },

      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: '**',
        component: NOTFOUNDPage,
        loadChildren: () => import('./not-found/not-found.module').then( m => m.NOTFOUNDPageModule)
      },
      
    ]),
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
