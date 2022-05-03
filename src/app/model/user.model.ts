import { UserInterface } from 'src/app/interfaces/interfaces';
import { Utils } from 'src/app/model/utils.class';

export class User {
	constructor(
		public id: number = null,
		public name: string = null,
		public email: string = null,
		public token: string = null,
	) {}

	fromInterface(u: UserInterface): User {
		this.id = u.id;
		this.name = Utils.urldecode(u.name);
		this.email = Utils.urldecode(u.email);
		this.token = Utils.urldecode(u.token);

		return this;
	}

	toInterface(): UserInterface {
		return {
			id: this.id,
			name: Utils.urlencode(this.name),
			email: Utils.urlencode(this.email),
			token: Utils.urlencode(this.token)
		};
	}
}