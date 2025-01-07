import { Routes } from '@angular/router';
import { resolveTitleFor } from '@app-routes/utils/resolve-title-for';
import { path } from '@app-routes/utils/path';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: path('dashboard'),
    title: resolveTitleFor('Dashboard'),
    loadComponent: () =>
      import('./pages/dashboard').then((page) => page.DashboardPageComponent),
  },
  {
    path: path('auth'),
    children: [
      {
        path: path(''),
        pathMatch: 'full',
        redirectTo: path('sign-in'),
      },
      {
        path: path('sign-in'),
        title: resolveTitleFor('SignIn'),
        loadComponent: () =>
          import('./pages/auth').then((page) => page.SignInPageComponent),
      },
      {
        path: path('sign-up'),
        title: resolveTitleFor('SignUp'),
        loadComponent: () =>
          import('./pages/auth').then((page) => page.SignInPageComponent),
      },
    ],
  },
];
