export interface DialogField {
	title: string;
	type: string;
	value: string;
	hint?: string;
}

export interface DialogOptions {
	title: string;
	content: string;
	fields?: DialogField[];
	ok: string;
	cancel?: string;
}

export interface DataShareObject {
	key: string;
	type: string;
	value: any;
	date: number;
}

export interface LoginData {
	email: string;
	pass: string;
}

export interface LoginResult {
	status: string;
	user: UserInterface;
}

export interface RegisterData {
	name: string;
	email: string;
	pass: string;
	conf: string;
}

export interface UserInterface {
	id: number;
	name: string;
	email: string;
	token: string;
}

export interface MealInterface {
	id: number;
	name: string;
	enabled: boolean;
	startTime: string;
	endTime: string;
}

export interface GroupInterface {
	id: number;
	name: string;
}

export interface RecipeInterface {
	id: number;
	name: string;
	group: GroupInterface;
	time: number;
	instructions: string;
}

export interface UnitInterface {
	id: number;
	name: string;
}

export interface IngredientInterface {
	id: number;
	amount: number;
	unit: UnitInterface;
	name: string;
	group: GroupInterface;
}