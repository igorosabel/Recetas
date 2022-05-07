import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ClassMapperService } from 'src/app/services/class-mapper.service';

@Component({
	selector: 'rec-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	constructor(
		private as: ApiService,
		private cms: ClassMapperService
	) {}

	ngOnInit(): void {
		this.as.getMainData().subscribe(result => {
			console.log(this.cms.getDayRecipes(result.dayRecipes));
		});
	}
}
