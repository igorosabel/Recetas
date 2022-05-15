import { Component, OnInit, ComponentRef } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { ModalPosition } from 'src/app/interfaces/interfaces';

@Component({
	selector: 'rec-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
	componentRef: ComponentRef<ModalComponent> = null;
	mode: string = 'new';
	dragging: boolean = false;
	
	animationTime: number = 2000;
	closePercentage: number = 60;

	constructor() {}
	ngOnInit(): void {}

	open(componentRef: ComponentRef<ModalComponent>): void {
		this.componentRef = componentRef;
		this.mode = 'opening';
		this.componentRef.hostView.detectChanges();
		setTimeout(() => {
			this.mode = 'open';
			this.componentRef.hostView.detectChanges();
		}, this.animationTime);
	}

	close(ev: MouseEvent = null): void {
		if (ev !== null) {
			ev.preventDefault();
			ev.stopPropagation();
		}
		this.mode = 'close';
		this.componentRef.hostView.detectChanges();
	}

	onDragStart(): void {
		console.log('drag start');
		this.dragging = true;
		this.componentRef.hostView.detectChanges();
	}

	onDragEnded(event: CdkDragEnd): void {
		console.log('drag end');
		this.dragging = false;
		const element = event.source.getRootElement();
		const boundingClientRect = element.getBoundingClientRect();
		const parentPosition = this.getPosition(element);
		const x: number = (boundingClientRect.x - parentPosition.left);
		const y: number = (boundingClientRect.y - parentPosition.top);
		const movePercentage: number = (y * 100) / boundingClientRect.height;

		// Si el porcentaje es menor que el límite, reseteo la posición original
		if (movePercentage < this.closePercentage) {
			this.mode = 'reset';
			this.componentRef.hostView.detectChanges();
			event.source._dragRef.reset();
			setTimeout(() => {
				this.mode = 'open';
				this.componentRef.hostView.detectChanges();
			}, this.animationTime);
		}
		// Si el porcentaje es mayor, cierro el modal
		else {
			event.source._dragRef.reset();
			this.close();
		}
		console.log({x, y, movePercentage});
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
