import { DayRecipeInterface } from 'src/app/interfaces/interfaces';
import { Meal } from 'src/app/model/meal.model';
import { Recipe } from 'src/app/model/recipe.model';

export class DayRecipe {
	constructor(
		public weekDay: number = null,
		public meal: Meal = null,
		public recipe: Recipe = null
	) {}

	fromInterface(dr: DayRecipeInterface): DayRecipe {
		this.weekDay = dr.weekDay;
		this.meal = new Meal().fromInterface(dr.meal);
		this.recipe = (dr.recipe !== null) ? new Recipe().fromInterface(dr.recipe) : null;

		return this;
	}

	toInterface(): DayRecipeInterface {
		return {
			weekDay: this.weekDay,
			meal: this.meal.toInterface(),
			recipe: this.recipe.toInterface()
		};
	}
}
