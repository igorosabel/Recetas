import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { IngredientAddComponent } from 'src/app/modules/shared/components/ingredient-add/ingredient-add.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  standalone: true,
  selector: 'rec-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  imports: [CommonModule, FormsModule, MaterialModule],
})
export default class RecipeComponent implements OnInit {
  mode: string = null;
  id: number = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ms: ModalService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.mode = params.mode;
      this.id = params.id;
    });
  }

  addIngredient(): void {
    this.ms.open(IngredientAddComponent);
  }
}
