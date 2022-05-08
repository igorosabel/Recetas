import { Component } from '@angular/core';
import { DayRecipe } from 'src/app/model/day-recipe.model';

@Component({
	selector: 'rec-meals',
	templateUrl: './meals.component.html',
	styleUrls: ['./meals.component.scss']
})
export class MealsComponent {
	dayRecipes: DayRecipe[] = [];
	weekDays: string[] = ['', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
	list: DayRecipe[][] = [];
	previousDay:  number = null;
	selectedDay: number = null;
	nextDay: number = null;

	constructor() {
		const d: Date = new Date();
		let day = d.getDay();
		if (d.getDay() == 0) {
			day = 7;
		}
		this.calculateDays(day);
	}

	calculateDays(day: number): void {
		this.selectedDay = day;
		switch (day) {
			case 1: {
				this.previousDay = 7;
				this.nextDay = 2;
			}
			break;
			case 7: {
				this.previousDay = 6;
				this.nextDay = 1;
			}
			break;
			default: {
				this.previousDay = day -1;
				this.nextDay = day +1;
			}
		}
		console.log(this.previousDay, this.selectedDay, this.nextDay);
	}

	load(dayRecipes: DayRecipe[]): void {
		for (let item of dayRecipes) {
			if (!this.list[item.weekDay]) {
				this.list[item.weekDay] = [];
			}
			this.list[item.weekDay].push(item);
		}

	}

	changeDay(sent: string): void {
		let day = this.selectedDay;
		if (sent === 'previous') {
			day--;
			if (day === 0) {
				day = 7;
			}
		}
		if (sent === 'next') {
			day++;
			if (day === 8) {
				day = 1;
			}
		}
		this.calculateDays(day);
	}
}
