import { IngredientInterface } from 'src/app/interfaces/interfaces';
import { Unit } from 'src/app/model/unit.model';
import { Group } from 'src/app/model/group.model';
import { Utils } from 'src/app/model/utils.class';

export class Ingredient {
	constructor(
		public id: number = null,
		public amount: number = null,
		public unit: Unit = null,
		public name: string = null,
		public group: Group = null
	) {}

	fromInterface(i: IngredientInterface): Ingredient {
		this.id = i.id;
		this.amount = i.amount;
		this.unit = new Unit().fromInterface(i.unit);
		this.name = Utils.urldecode(i.name);
		this.group = new Group().fromInterface(i.group);

		return this;
	}

	toInterface(): IngredientInterface {
		return {
			id: this.id,
			amount: this.amount,
			unit: this.unit.toInterface(),
			name: Utils.urlencode(this.name),
			group: this.group.toInterface()
		};
	}
}