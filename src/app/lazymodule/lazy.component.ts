import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `<p>Lazy Component</p>
 <button (click)="seeMore()"> Goto More </button>
  `
})
export class LazyComponent {
  constructor(public router: Router) {}
  seeMore() {
    this.router.navigate(["/lazy/more"]);
  }
}
