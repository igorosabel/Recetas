import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }    from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { MainComponent }     from 'src/app/pages/main/main.component';
import { RecipeComponent }   from 'src/app/pages/recipe/recipe.component';

import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
	{ path: '',                 component: LoginComponent },
	{ path: 'register',         component: RegisterComponent },
	{ path: 'main',             component: MainComponent,   canActivate: [AuthGuard] },
	{ path: 'recipe/:mode',       component: RecipeComponent, canActivate: [AuthGuard] },
	{ path: 'recipe/:mode/:id', component: RecipeComponent, canActivate: [AuthGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
