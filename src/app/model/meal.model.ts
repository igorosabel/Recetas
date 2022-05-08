import { MealInterface } from 'src/app/interfaces/interfaces';
import { Utils } from 'src/app/model/utils.class';

export class Meal {
	constructor(
		public id: number = null,
		public name: string = null,
		public enabled: boolean = null,
		public startTime: string = null,
		public endTime: string = null
	) {}

	get startHour(): number {
		return parseInt(this.startTime.split(':')[0]);
	}

	fromInterface(m: MealInterface): Meal {
		this.id = m.id;
		this.name = Utils.urldecode(m.name);
		this.enabled = m.enabled;
		this.startTime = m.startTime;
		this.endTime = m.endTime;

		return this;
	}

	toInterface(): MealInterface {
		return {
			id: this.id,
			name: Utils.urlencode(this.name),
			enabled: this.enabled,
			startTime: this.startTime,
			endTime: this.endTime
		};
	}
}
