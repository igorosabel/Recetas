import { Component, OnInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { ModalPosition } from 'src/app/interfaces/interfaces';

@Component({
	selector: 'rec-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
	constructor() {}
	ngOnInit(): void {}

	onDragEnded(event: CdkDragEnd): void {
		const element = event.source.getRootElement();
		const boundingClientRect = element.getBoundingClientRect();
		const parentPosition = this.getPosition(element);
		console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));
	}

	getPosition(el: HTMLElement): ModalPosition {
		let x = 0;
		let y = 0;
		while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
			x += el.offsetLeft - el.scrollLeft;
			y += el.offsetTop - el.scrollTop;
			el = el.offsetParent as HTMLElement;
		}
		return { top: y, left: x };
	}
}
