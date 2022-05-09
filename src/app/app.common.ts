/**
 * Páginas
 */
import { LoginComponent }    from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { MainComponent }     from 'src/app/pages/main/main.component';
import { RecipeComponent }   from 'src/app/pages/recipe/recipe.component';

export const PAGES: any[] = [
	LoginComponent,
	RegisterComponent,
	MainComponent,
	RecipeComponent
];

/**
 * Componentes
 */
import { ConfirmDialogComponent }    from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
import { AlertDialogComponent }      from 'src/app/components/dialogs/alert-dialog/alert-dialog.component';
import { FormDialogComponent }       from 'src/app/components/dialogs/form-dialog/form-dialog.component';
import { LoadingComponent }          from 'src/app/components/loading/loading.component';
import { MealsComponent }            from 'src/app/components/meals/meals.component';
import { RecipeListComponent }       from 'src/app/components/recipe-list/recipe-list.component';
import { ShoppinglistListComponent } from 'src/app/components/shoppinglist-list/shoppinglist-list.component';

export const COMPONENTS: any[] = [
	ConfirmDialogComponent,
	AlertDialogComponent,
	FormDialogComponent,
	LoadingComponent,
	MealsComponent,
	RecipeListComponent,
	ShoppinglistListComponent
];

/**
 * Pipes
 */
export const PIPES: any[] = [];

/**
 * Servicios
 */
import { ApiService }         from 'src/app/services/api.service';
import { DataShareService }   from 'src/app/services/data-share.service';
import { DialogService }      from 'src/app/services/dialog.service';
import { UserService }        from 'src/app/services/user.service';
import { AuthService }        from 'src/app/services/auth.service';
import { ClassMapperService } from 'src/app/services/class-mapper.service';

export const SERVICES: any[] = [
	ApiService,
	DataShareService,
	DialogService,
	UserService,
	AuthService,
	ClassMapperService
];

/**
 * Componentes Angular Material
 */
import { MatToolbarModule }     from '@angular/material/toolbar';
import { MatCardModule }        from '@angular/material/card';
import { MatButtonModule }      from '@angular/material/button';
import { MatFormFieldModule }   from '@angular/material/form-field';
import { MatInputModule }       from '@angular/material/input';
import { MatIconModule }        from '@angular/material/icon';
import { MatListModule }        from '@angular/material/list';
import { MatSidenavModule }     from '@angular/material/sidenav';
import { MatDialogModule }      from '@angular/material/dialog';
import { MatSelectModule }      from '@angular/material/select';
import { MatTabsModule }        from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule }    from '@angular/material/checkbox';
import { MatRadioModule }       from '@angular/material/radio';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { DragDropModule }       from '@angular/cdk/drag-drop';
import { MatSnackBarModule }    from '@angular/material/snack-bar';

export const MATERIAL: any[] = [
	MatToolbarModule,
	MatCardModule,
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatDialogModule,
	MatSelectModule,
	MatTabsModule,
	MatSlideToggleModule,
	MatCheckboxModule,
	MatRadioModule,
	MatDatepickerModule,
	DragDropModule,
	MatSnackBarModule
];
