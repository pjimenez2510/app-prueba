import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'subject',
        loadChildren: () =>
          import('../subject/subject.routes').then((m) => m.routes),
      },
      {
        path: 'schedule',
        loadComponent: () =>
          import('../schedule/schedule.page').then((m) => m.SchedulePage),
      },
    ],
  },
  { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },
];
