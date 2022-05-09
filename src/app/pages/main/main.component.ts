import { Component, OnInit,  ViewChild } from '@angular/core';
import { MealsComponent } from 'src/app/components/meals/meals.component';
import { Recipe } from 'src/app/model/recipe.model';
import { ShoppingList } from 'src/app/model/shopping-list.model';
import { ApiService } from 'src/app/services/api.service';
import { ClassMapperService } from 'src/app/services/class-mapper.service';

@Component({
	selector: 'rec-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	@ViewChild('meals', { static: true }) meals: MealsComponent;
	recipes: Recipe[] = [];
	shoppingLists: ShoppingList[] = [];

	constructor(
		private as: ApiService,
		private cms: ClassMapperService
	) {}

	ngOnInit(): void {
		this.as.getMainData().subscribe(result => {
			this.meals.load( this.cms.getDayRecipes(result.dayRecipes) );
			this.recipes = this.cms.getRecipes(result.recipes);
			this.shoppingLists = this.cms.getShoppingLists(result.shoppingLists);
		});
	}
}
