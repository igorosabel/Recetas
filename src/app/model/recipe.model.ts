import {
  InstructionInterface,
  RecipeIngredientInterface,
  RecipeInterface,
} from 'src/app/interfaces/interfaces';
import { Instruction } from 'src/app/model/instruction.model';
import { RecipeIngredient } from 'src/app/model/recipe-ingredient.model';
import { Utils } from 'src/app/model/utils.class';
import { environment } from 'src/environments/environment';

export class Recipe {
  constructor(
    public id: number = null,
    public name: string = null,
    public time: number = null,
    public ingredients: RecipeIngredient[] = [],
    public instructions: Instruction[] = []
  ) {}

  get image(): string {
    return environment.imgUrl + this.id + '.webp';
  }

  fromInterface(r: RecipeInterface): Recipe {
    this.id = r.id;
    this.name = Utils.urldecode(r.name);
    this.time = r.time;
    this.ingredients = r.ingredients.map(
      (item: RecipeIngredientInterface): RecipeIngredient => {
        return new RecipeIngredient().fromInterface(item);
      }
    );
    this.instructions = r.instructions.map(
      (item: InstructionInterface): Instruction => {
        return new Instruction().fromInterface(item);
      }
    );

    return this;
  }

  toInterface(): RecipeInterface {
    return {
      id: this.id,
      name: Utils.urlencode(this.name),
      time: this.time,
      ingredients: this.ingredients.map(
        (item: RecipeIngredient): RecipeIngredientInterface => {
          return item.toInterface();
        }
      ),
      instructions: this.instructions.map(
        (item: Instruction): InstructionInterface => {
          return item.toInterface();
        }
      ),
    };
  }
}
