import { Component, Input } from "@angular/core";

@Component({
  selector: "lazy-clazy",

  template: `<h3>Child Lazy</h3>
  <p>{{childMessage}}</p>
  `
})
export class ClazyComponent {
  @Input() childMessage: string;
}
