import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `<h1>Example Component</h1>
  `
})
export class ExampleComponent {
  constructor(public router: Router) {}
  //   seeMore() {
  //     this.router.navigate(["/lazy/more"]);
  //   }
}
