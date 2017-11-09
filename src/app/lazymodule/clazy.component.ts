import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "lazy-clazy",

  template: `<h3>Child Lazy</h3>
  <p>{{childMessage}}</p>
  <button (click)="sendMessage()">Send Message</button>
  
  `
})
export class ClazyComponent {
  @Input() childMessage: string;

  message: string = "Hola Mundo!";
  @Output() messageEvent = new EventEmitter<string>();
  constructor() {}
  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
