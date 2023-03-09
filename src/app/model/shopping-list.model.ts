import {
  ShoppingListIngredientInterface,
  ShoppingListInterface,
} from 'src/app/interfaces/interfaces';
import { ShoppingListIngredient } from 'src/app/model/shopping-list-ingredient.model';
import { Utils } from 'src/app/model/utils.class';

export class ShoppingList {
  constructor(
    public id: number = null,
    public name: string = null,
    public list: ShoppingListIngredient[] = []
  ) {}

  fromInterface(sl: ShoppingListInterface): ShoppingList {
    this.id = sl.id;
    this.name = Utils.urldecode(sl.name);
    this.list = sl.list.map(
      (item: ShoppingListIngredientInterface): ShoppingListIngredient => {
        return new ShoppingListIngredient().fromInterface(item);
      }
    );

    return this;
  }

  toInterface(): ShoppingListInterface {
    return {
      id: this.id,
      name: Utils.urlencode(this.name),
      list: this.list.map(
        (item: ShoppingListIngredient): ShoppingListIngredientInterface => {
          return item.toInterface();
        }
      ),
    };
  }
}
