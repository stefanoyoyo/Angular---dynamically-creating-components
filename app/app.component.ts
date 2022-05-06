import {Component, NgModule,Input,ComponentFactory,ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, TemplateRef, ViewChild, Output, EventEmitter} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {AlertComponent} from './alert.component';
import { SharedService } from './Services/shared.service';

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

  // NOn si può
  //  container: HTMLElement = document.querySelector('alertContainer');
 
  constructor(private resolver: ComponentFactoryResolver, private shared: SharedService) {}
  
  createComponent(type) {
    /**Elimina l'html al suo interno, altrimenti vedo il componente dupplicato */
    this.container.clear();
    const factory: ComponentFactory = this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef = this.container.createComponent(factory);
    
    /**Non obbligatori! */
    this.componentRef.instance.type = type;
    this.componentRef.instance.output.subscribe(event => console.log(event));

    setTimeout(() => {
      this.shared.text = 'Changed. Dynamic component can share info with other components by a service.';
    }, 5000); 

  }
  
    ngOnDestroy() {
      this.componentRef.destroy();    
    }
}
