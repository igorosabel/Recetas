import { UnitInterface } from 'src/app/interfaces/interfaces';
import { Utils } from 'src/app/model/utils.class';

export class Unit {
	constructor(
		public id: number = null,
		public name: string = null
	) {}

	fromInterface(u: UnitInterface): Unit {
		this.id = u.id;
		this.name = Utils.urldecode(u.name);

		return this;
	}

	toInterface(): UnitInterface {
		return {
			id: this.id,
			name: Utils.urlencode(this.name)
		};
	}
}