import { Component, Input, EventEmitter, Output } from '@angular/core';
import { SharedService } from './Services/shared.service';

@Component({
  selector: "alert",
  template: `
    <h1 (click)="output.next('output')">Alert {{type}}</h1>
    <p>{{this.shared.text}}</p>
  `,
})
export class AlertComponent {
  @Input() type: string = "success";
  @Output() output = new EventEmitter();

  constructor(private shared: SharedService) {}

}
