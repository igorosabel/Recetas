import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/app/modules/pages/login/login.component';

import { isLoggedGuardFn } from 'src/app/guard/auth.guard.fn';

const routes: Routes = [
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
    canActivate: ['CanActivateFn'],
  },
  {
    path: 'recipe/:mode',
    loadComponent: () =>
      import('src/app/modules/pages/recipe/recipe.component'),
    canActivate: ['CanActivateFn'],
  },
  {
    path: 'recipe/:mode/:id',
    loadComponent: () =>
      import('src/app/modules/pages/recipe/recipe.component'),
    canActivate: ['CanActivateFn'],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: 'CanActivateFn', useFactory: isLoggedGuardFn }],
})
export class AppRoutingModule {}
