import {Component, NgModule,Input,ComponentFactory,ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, TemplateRef, ViewChild, Output, EventEmitter} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {AlertComponent} from './alert.component';

@Component({
  selector: 'my-app',
  template: `
    <template #alertContainer></template>
    <button (click)="createComponent('success')">Create success alert</button>
    <button (click)="createComponent('danger')">Create danger alert</button>
  `,
})
export class App {
 @ViewChild("alertContainer", { read: ViewContainerRef }) container;
 componentRef: ComponentRef;
 
  constructor(private resolver: ComponentFactoryResolver) {}
  
  createComponent(type) {
    this.container.clear();
    const factory: ComponentFactory = this.resolver.resolveComponentFactory(AlertComponent);

    this.componentRef = this.container.createComponent(factory);
    
    this.componentRef.instance.type = type;

    this.componentRef.instance.output.subscribe(event => console.log(event));

  }
  
    ngOnDestroy() {
      this.componentRef.destroy();    
    }
}
