import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Group } from 'src/app/model/group.model';
import { Unit } from 'src/app/model/unit.model';
import { Ingredient } from 'src/app/model/ingredient.model';
import { Meal } from 'src/app/model/meal.model';
import { Recipe } from 'src/app/model/recipe.model';
import {
	UserInterface,
	GroupInterface,
	UnitInterface,
	IngredientInterface,
	MealInterface,
	RecipeInterface
} from 'src/app/interfaces/interfaces';

@Injectable({
	providedIn: 'root'
})
export class ClassMapperService {
	constructor() {}

	getUser(u: UserInterface): User {
		return new User().fromInterface(u);
	}

	getGroup(g: GroupInterface): Group {
		return new Group().fromInterface(g);
	}

	getGroups(gs: GroupInterface[]): Group[] {
		const groups: Group[] = [];

		for (let g of gs) {
			groups.push(this.getGroup(g));
		}

		return groups;
	}

	getUnit(u: UnitInterface): Unit {
		return new Unit().fromInterface(u);
	}

	getUnits(us: UnitInterface[]): Unit[] {
		const units: Unit[] = [];

		for (let u of us) {
			units.push(this.getUnit(u));
		}

		return units;
	}

	getIngredient(i: IngredientInterface): Ingredient {
		return new Ingredient().fromInterface(i);
	}

	getIngredients(is: IngredientInterface[]): Ingredient[] {
		const ingredients: Ingredient[] = [];

		for (let i of is) {
			ingredients.push(this.getIngredient(i));
		}

		return ingredients;
	}

	getMeal(m: MealInterface): Meal {
		return new Meal().fromInterface(m);
	}

	getMeals(ms: MealInterface[]): Meal[] {
		const meals: Meal[] = [];

		for (let m of ms) {
			meals.push(this.getMeal(m));
		}

		return meals;
	}

	getRecipe(r: RecipeInterface): Recipe {
		return new Recipe().fromInterface(r);
	}

	getRecipes(rs: RecipeInterface[]): Recipe[] {
		const recipes: Recipe[] = [];

		for (let r of rs) {
			recipes.push(this.getRecipe(r));
		}

		return recipes;
	}
}
