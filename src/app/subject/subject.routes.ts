import { Routes } from '@angular/router';
import { SubjectPage } from './subject.page';

export const routes: Routes = [
  {
    path: '',
    component: SubjectPage,
    children: [
      {
        path: 'info/:id', // Corrige el prefijo
        loadComponent: () => import('./info/info.page').then((m) => m.InfoPage),
      },
      {
        path: 'grades/:id',
        loadComponent: () =>
          import('./grades/grades.page').then((m) => m.GradesPage),
      },
      {
        path: 'task-details/:id', // Corrige el prefijo
        loadComponent: () =>
          import('./task-details/task-details.page').then(
            (m) => m.TaskDetailsPage
          ),
      },
    ],
  },
  { path: '', redirectTo: '/tabs/home', pathMatch: 'full' }, // Mejor redirigir a Home
];
