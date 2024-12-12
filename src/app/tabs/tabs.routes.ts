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
        path: 'grades',
        loadComponent: () =>
          import('../academic/grades/grades.page').then((m) => m.GradesPage),
      },
      {
        path: 'schedule',
        loadComponent: () =>
          import('../schedule/schedule.page').then((m) => m.SchedulePage),
      },
      {
        path: 'tasks',
        loadComponent: () =>
          import('../tasks/task-list/task-list.page').then(
            (m) => m.TaskListPage
          ),
      },
    ],
  },
  { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },
];
