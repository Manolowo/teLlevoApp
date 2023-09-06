import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';

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
          },
          {
            path: 'pasajeros',
            loadChildren: () => import('./pasajeros/pasajeros.module').then((m) => m.PasajerosPageModule),
          },
          {
            path: 'conductor',
            loadChildren: () => import('./conductor/conductor.module').then((m) => m.ConductorPageModule),
          },
        ],
      },
    ]),
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
