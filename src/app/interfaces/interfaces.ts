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
}

export interface UserInterface {
	id: number;
	name: string;
	email: string;
	token: string;
}