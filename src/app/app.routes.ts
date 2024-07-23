import { Routes } from '@angular/router';

export const routes: Routes = [
  
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
