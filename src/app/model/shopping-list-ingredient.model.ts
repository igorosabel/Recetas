import { ShoppingListIngredientInterface } from 'src/app/interfaces/interfaces';
import { Ingredient } from 'src/app/model/ingredient.model';

export class ShoppingListIngredient {
  constructor(
    public ingredient: Ingredient = null,
    public order: number = null,
    public amount: number = null
  ) {}

  fromInterface(sli: ShoppingListIngredientInterface): ShoppingListIngredient {
    this.ingredient = new Ingredient().fromInterface(sli.ingredient);
    this.order = sli.order;
    this.amount = sli.amount;

    return this;
  }

  toInterface(): ShoppingListIngredientInterface {
    return {
      ingredient: this.ingredient.toInterface(),
      order: this.order,
      amount: this.amount,
    };
  }
}
