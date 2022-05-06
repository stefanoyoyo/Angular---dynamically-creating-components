//our root app component
import {Component, NgModule,Input,ComponentFactory,ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, TemplateRef, ViewChild, Output, EventEmitter} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AlertComponent} from './alert.component';
import {App} from './app.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App , AlertComponent],
  entryComponents: [AlertComponent],
  bootstrap: [ App ]
})
export class AppModule {}