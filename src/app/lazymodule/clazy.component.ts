import { Component, Input, Output, EventEmitter } from "@angular/core";
import { LazyService } from "./lazy.service";
@Component({
  selector: "lazy-clazy",

  template: `<h3>Child Lazy</h3>
  <p>{{childMessage}}</p>
  <button (click)="sendMessage()">Send Message</button>
  <button (click)="changeObservable()">Change observable</button>
  
  `
})
export class ClazyComponent {
  @Input() childMessage: string;

  message: string = "Hola Mundo!";
  @Output() messageEvent = new EventEmitter<string>();
  constructor(public data: LazyService) {}
  sendMessage() {
    this.messageEvent.emit(this.message);
  }
  changeObservable() {
    this.data.changeMessage("Clazy Comp changed it");
  }
}
