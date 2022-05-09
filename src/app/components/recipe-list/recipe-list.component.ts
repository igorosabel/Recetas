import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
	selector: 'rec-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
	@Input() recipes: Recipe[] = [];

	constructor() {}
}