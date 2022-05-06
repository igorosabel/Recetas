import { RecipeIngredientInterface } from 'src/app/interfaces/interfaces';
import { Ingredient } from 'src/app/model/ingredient.model';
import { Utils } from 'src/app/model/utils.class';

export class RecipeIngredient {
	constructor(
		public ingredient: Ingredient = null,
		public order: number = null,
		public amount: string = null
	) {}

	fromInterface(ri: RecipeIngredientInterface): RecipeIngredient {
		this.ingredient = new Ingredient().fromInterface(ri.ingredient);
		this.order = ri.order;
		this.amount = Utils.urldecode(ri.amount);

		return this;
	}

	toInterface(): RecipeIngredientInterface {
		return {
			ingredient: this.ingredient.toInterface(),
			order: this.order,
			amount: Utils.urlencode(this.amount)
		};
	}
}