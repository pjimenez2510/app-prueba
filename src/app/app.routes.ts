import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  { path: '**', redirectTo: 'login' },
];
