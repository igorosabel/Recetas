import { Routes } from '@angular/router';
import { isLoggedGuardFn } from 'src/app/guard/auth.guard.fn';
import { LoginComponent } from 'src/app/modules/pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    loadComponent: () =>
      import('src/app/modules/pages/register/register.component'),
  },
  {
    path: 'main',
    loadComponent: () => import('src/app/modules/pages/main/main.component'),
    canActivate: [isLoggedGuardFn],
  },
  {
    path: 'recipe/:mode',
    loadComponent: () =>
      import('src/app/modules/pages/recipe/recipe.component'),
    canActivate: [isLoggedGuardFn],
  },
  {
    path: 'recipe/:mode/:id',
    loadComponent: () =>
      import('src/app/modules/pages/recipe/recipe.component'),
    canActivate: [isLoggedGuardFn],
  },
];
