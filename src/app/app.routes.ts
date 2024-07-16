import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full',
  },
  {
    path: 'lista',
    loadComponent: () => import('./paginas/lista/lista.page').then( m => m.ListaPage)
  },
  {
    path: 'formulario',
    loadComponent: () => import('./paginas/formulario/formulario.page').then( m => m.FormularioPage)
  },
];
