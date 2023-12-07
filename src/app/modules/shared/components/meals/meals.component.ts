import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DayRecipe } from 'src/app/model/day-recipe.model';
import { MaterialModule } from 'src/app/modules/material/material.module';

@Component({
  standalone: true,
  selector: 'rec-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
  imports: [CommonModule, MaterialModule],
})
export class MealsComponent {
  dayRecipes: DayRecipe[] = [];
  weekDays: string[] = [
    '',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];
  list: DayRecipe[][] = [];
  selectedInd: number = null;
  previousDay: number = null;
  selectedDay: number = null;
  nextDay: number = null;

  constructor() {
    const d: Date = new Date();
    let day: number = d.getDay();
    if (d.getDay() == 0) {
      day = 7;
    }
    this.calculateDays(day);
  }

  calculateDays(day: number): void {
    this.selectedDay = day;
    switch (day) {
      case 1:
        {
          this.previousDay = 7;
          this.nextDay = 2;
        }
        break;
      case 7:
        {
          this.previousDay = 6;
          this.nextDay = 1;
        }
        break;
      default: {
        this.previousDay = day - 1;
        this.nextDay = day + 1;
      }
    }
  }

  load(dayRecipes: DayRecipe[]): void {
    const currentHour: number = new Date().getHours();
    let ind: number = -1;
    for (const item of dayRecipes) {
      if (!this.list[item.weekDay]) {
        ind = -1;
        this.list[item.weekDay] = [];
      }
      this.list[item.weekDay].push(item);
      ind++;
      if (
        this.selectedInd === null &&
        item.weekDay === this.selectedDay &&
        currentHour < item.meal.startHour
      ) {
        this.selectedInd = ind;
      }
    }
  }

  changeMeal(sent: string): void {
    if (sent === 'previous') {
      if (this.selectedInd === 0) {
        this.changeDay('previous');
        this.selectedInd = 2;
      } else {
        this.selectedInd--;
      }
    }
    if (sent === 'next') {
      if (this.selectedInd === 2) {
        this.changeDay('next');
        this.selectedInd = 0;
      } else {
        this.selectedInd++;
      }
    }
  }

  changeDay(sent: string): void {
    let day: number = this.selectedDay;
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
    this.selectedInd = 0;
    this.calculateDays(day);
  }
}
