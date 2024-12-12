import { Routes } from '@angular/router';
import { SubjectPage } from './subject.page';

export const routes: Routes = [
  {
    path: '',
    component: SubjectPage,
    children: [
      {
        path: 'info',
        loadComponent: () => import('./info/info.page').then((m) => m.InfoPage),
      },
      {
        path: 'grades',
        loadComponent: () =>
          import('./grades/grades.page').then((m) => m.GradesPage),
      },
      {
        path: 'task-details:id',
        loadComponent: () =>
          import('./task-details/task-details.page').then(
            (m) => m.TaskDetailsPage
          ),
      },
    ],
  },
  { path: '', redirectTo: '/tabs/subject/info', pathMatch: 'full' },
];
