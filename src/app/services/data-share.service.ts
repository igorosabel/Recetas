import { Injectable } from '@angular/core';
import { DataShareObject } from 'src/app/interfaces/interfaces';

@Injectable()
export class DataShareService {
	saveLocalStorage: boolean = true;
	globals = {};

	constructor() {}

	setSaveLocalStorage(mode): void {
		this.saveLocalStorage = mode;
	}

	setGlobal(key: string, value: any): void {
		this.globals[key] = value;
		if (this.saveLocalStorage) {
			const d: Date = new Date();
			const obj: DataShareObject = {
				key: key,
				type: typeof value,
				value: value,
				date: d.getTime()
			};
			switch (obj.type) {
				case 'number':
				case 'boolean': { obj.value = value.toString(); }
				break;
				case 'object': { obj.value = JSON.stringify(value); }
				break;
			}
			localStorage.setItem(key, JSON.stringify(obj));
		}
	}

	getGlobal(key:string): any {
		if (!this.saveLocalStorage) {
			if (!this.globals[key]) {
				return null;
			}
			return this.globals[key];
		}
		else {
			if (this.globals[key]) {
				return this.globals[key];
			}
			const obj: DataShareObject = JSON.parse(localStorage.getItem(key));
			if (!obj) {
				return null;
			}
			if (!obj.date) {
				localStorage.removeItem(key);
				return null;
			}
			const d: Date = new Date();
			if (d.getTime() > (obj.date + (1000 * 60 * 60 * 24 * 2))) {
				localStorage.removeItem(key);
				return null;
			}
			this.globals[key] = obj.value;
			return this.globals[key];
		}
	}

	removeGlobal(key:string): void {
		if (this.globals[key]) {
			delete this.globals[key];
		}
		if (this.saveLocalStorage) {
			localStorage.removeItem(key);
		}
	}

	resetGlobals(): void {
		this.globals = {};
		if (this.saveLocalStorage) {
			localStorage.clear();
		}
	}
}