import { DOCUMENT } from '@angular/common';
import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
  TemplateRef,
  Type,
} from '@angular/core';
import { ModalComponent } from 'src/app/modules/shared/components/modal/modal.component';

export type Content<T> = string | TemplateRef<T> | Type<T>;

@Injectable()
export class ModalService {
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open<T>(content: Content<T>): void {
    const factory: ComponentFactory<ModalComponent> =
      this.resolver.resolveComponentFactory(ModalComponent);
    const ngContent: any[][] = this.resolveNgContent(content);
    const componentRef: ComponentRef<ModalComponent> = factory.create(
      this.injector,
      ngContent
    );

    componentRef.hostView.detectChanges();

    const { nativeElement } = componentRef.location;
    this.document.body.appendChild(nativeElement);
    setTimeout((): void => {
      componentRef.instance.open(componentRef);
    }, 100);
  }

  resolveNgContent<T>(content: Content<T>): any[][] {
    if (typeof content === 'string') {
      const element: Text = this.document.createTextNode(content);
      return [[element]];
    }

    if (content instanceof TemplateRef) {
      const viewRef: EmbeddedViewRef<T> = content.createEmbeddedView(null);
      console.log(viewRef);
      // In earlier versions, you may need to add this line
      // this.appRef.attachView(viewRef);
      return [viewRef.rootNodes];
    }

    const factory: ComponentFactory<T> =
      this.resolver.resolveComponentFactory(content);
    const componentRef: ComponentRef<T> = factory.create(this.injector);
    return [
      [componentRef.location.nativeElement],
      [this.document.createTextNode('Second ng-content')],
    ];
  }
}
