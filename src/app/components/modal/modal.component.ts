import { Component, OnInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { ModalPosition } from 'src/app/interfaces/interfaces';

@Component({
	selector: 'rec-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
	mode: string = 'new';
	constructor() {}
	ngOnInit(): void {}

	onDragEnded(event: CdkDragEnd): void {
		const element = event.source.getRootElement();
		const boundingClientRect = element.getBoundingClientRect();
		console.log(boundingClientRect);
		const parentPosition = this.getPosition(element);
		const x: number = (boundingClientRect.x - parentPosition.left);
		const y: number = (boundingClientRect.y - parentPosition.top);
		console.log({x, y, top: parentPosition.top});
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
