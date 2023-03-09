import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { MaterialModule } from 'src/app/modules/material/material.module';

@Component({
  standalone: true,
  selector: 'rec-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  imports: [CommonModule, MaterialModule],
})
export class RecipeListComponent {
  @Input() recipes: Recipe[] = [];
}
