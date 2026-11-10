import { Routes } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'tareas',
    component: TaskList,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login').then(m => m.Login)
  },
  {
    path: '',
    redirectTo: 'tareas',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'tareas'
  }
];
