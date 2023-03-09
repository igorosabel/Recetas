import { Component, OnInit, ViewChild } from '@angular/core';
import { MainResult } from 'src/app/interfaces/interfaces';
import { Recipe } from 'src/app/model/recipe.model';
import { ShoppingList } from 'src/app/model/shopping-list.model';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MealsComponent } from 'src/app/modules/shared/components/meals/meals.component';
import { RecipeListComponent } from 'src/app/modules/shared/components/recipe-list/recipe-list.component';
import { ShoppinglistListComponent } from 'src/app/modules/shared/components/shoppinglist-list/shoppinglist-list.component';
import { ApiService } from 'src/app/services/api.service';
import { ClassMapperService } from 'src/app/services/class-mapper.service';

@Component({
  standalone: true,
  selector: 'rec-main',
  templateUrl: './main.component.html',
  imports: [
    MaterialModule,
    RecipeListComponent,
    ShoppinglistListComponent,
    MealsComponent,
  ],
})
export default class MainComponent implements OnInit {
  @ViewChild('meals', { static: true }) meals: MealsComponent;
  recipes: Recipe[] = [];
  shoppingLists: ShoppingList[] = [];

  constructor(private as: ApiService, private cms: ClassMapperService) {}

  ngOnInit(): void {
    this.as.getMainData().subscribe((result: MainResult): void => {
      this.meals.load(this.cms.getDayRecipes(result.dayRecipes));
      this.recipes = this.cms.getRecipes(result.recipes);
      this.shoppingLists = this.cms.getShoppingLists(result.shoppingLists);
    });
  }
}
