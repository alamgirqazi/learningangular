import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `<p>Router B</p>
  `
})
export class RouterbComponent {
  constructor(public router: Router) {}
}
