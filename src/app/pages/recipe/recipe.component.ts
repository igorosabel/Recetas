import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { IngredientAddComponent } from 'src/app/components/ingredient-add/ingredient-add.component';

@Component({
	selector: 'rec-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
	mode: string = null;
	id: number = null;

	constructor(
		private activatedRoute: ActivatedRoute,
		private ms: ModalService
	) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.mode = params.mode;
			this.id = params.id;
		});
	}
	
	addIngredient(): void {
		this.ms.open(IngredientAddComponent);
	}
}