import { Injectable } from '@angular/core';
import {
  DayRecipeInterface,
  IngredientInterface,
  RecipeInterface,
  ShoppingListInterface,
  UserInterface,
} from 'src/app/interfaces/interfaces';
import { DayRecipe } from 'src/app/model/day-recipe.model';
import { Ingredient } from 'src/app/model/ingredient.model';
import { Recipe } from 'src/app/model/recipe.model';
import { ShoppingList } from 'src/app/model/shopping-list.model';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class ClassMapperService {
  constructor() {}

  getUser(u: UserInterface): User {
    return new User().fromInterface(u);
  }

  getDayRecipe(dr: DayRecipeInterface): DayRecipe {
    return new DayRecipe().fromInterface(dr);
  }

  getDayRecipes(drs: DayRecipeInterface[]): DayRecipe[] {
    return drs.map((dr: DayRecipeInterface): DayRecipe => {
      return this.getDayRecipe(dr);
    });
  }

  getRecipe(r: RecipeInterface): Recipe {
    return new Recipe().fromInterface(r);
  }

  getRecipes(rs: RecipeInterface[]): Recipe[] {
    return rs.map((r: RecipeInterface): Recipe => {
      return this.getRecipe(r);
    });
  }

  getShoppingList(sl: ShoppingListInterface): ShoppingList {
    return new ShoppingList().fromInterface(sl);
  }

  getShoppingLists(sls: ShoppingListInterface[]): ShoppingList[] {
    return sls.map((sl: ShoppingListInterface): ShoppingList => {
      return this.getShoppingList(sl);
    });
  }

  getIngredient(i: IngredientInterface): Ingredient {
    return new Ingredient().fromInterface(i);
  }

  getIngredients(is: IngredientInterface[]): Ingredient[] {
    return is.map((i: IngredientInterface): Ingredient => {
      return this.getIngredient(i);
    });
  }
}
