import { GroupInterface } from 'src/app/interfaces/interfaces';
import { Utils } from 'src/app/model/utils.class';

export class Group {
	constructor(
		public id: number = null,
		public name: string = null
	) {}

	fromInterface(g: GroupInterface): Group {
		this.id = g.id;
		this.name = Utils.urldecode(g.name);

		return this;
	}

	toInterface(): GroupInterface {
		return {
			id: this.id,
			name: Utils.urlencode(this.name)
		};
	}
}