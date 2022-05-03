import { RecipeInterface } from 'src/app/interfaces/interfaces';
import { Group } from 'src/app/model/group.model';
import { Ingredient } from 'src/app/model/ingredient.model';
import { Utils } from 'src/app/model/utils.class';

export class Recipe {
	ingredients: Ingredient[] = [];

	constructor(
		public id: number = null,
		public name: string = null,
		public group: Group = null,
		public time: number = null,
		public instructions: string = null
	) {}

	fromInterface(r: RecipeInterface): Recipe {
		this.id = r.id;
		this.name = Utils.urldecode(r.name);
		this.group = new Group().fromInterface(r.group);
		this.time = r.time;
		this.instructions = Utils.urldecode(r.instructions);

		return this;
	}

	toInterface(): RecipeInterface {
		return {
			id: this.id,
			name: Utils.urlencode(this.name),
			group: this.group.toInterface(),
			time: this.time,
			instructions: Utils.urlencode(this.instructions)
		};
	}
}