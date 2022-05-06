import { InstructionInterface } from 'src/app/interfaces/interfaces';
import { Utils } from 'src/app/model/utils.class';

export class Instruction {
	constructor(
		public id: number = null,
		public order: number = null,
		public type: number = null,
		public instruction: string = null
	) {}

	fromInterface(i: InstructionInterface): Instruction {
		this.id = i.id;
		this.order = i.order;
		this.type = i.type;
		this.instruction = Utils.urldecode(i.instruction);

		return this;
	}

	toInterface(): InstructionInterface {
		return {
			id: this.id,
			order: this.order,
			type: this.type,
			instruction: Utils.urlencode(this.instruction)
		};
	}
}