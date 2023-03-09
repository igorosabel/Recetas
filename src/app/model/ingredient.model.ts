import { IngredientInterface } from 'src/app/interfaces/interfaces';
import { Utils } from 'src/app/model/utils.class';

export class Ingredient {
  constructor(public id: number = null, public name: string = null) {}

  fromInterface(i: IngredientInterface): Ingredient {
    this.id = i.id;
    this.name = Utils.urldecode(i.name);

    return this;
  }

  toInterface(): IngredientInterface {
    return {
      id: this.id,
      name: Utils.urlencode(this.name),
    };
  }
}
