import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `<p>Router A</p>
  `
})
export class RouteraComponent {
  constructor(public router: Router) {}
}
