import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `<p>Lazy Component</p>
 <button (click)="seeMore()"> Goto More </button>
 <button (click)="childlazy()"> Child Comp </button>
<lazy-clazy [childMessage]="parentMessage"></lazy-clazy>
  `
})
export class LazyComponent {
  constructor(public router: Router) {}
  parentMessage = "message from parent";

  seeMore() {
    this.router.navigate(["/lazy/more"]);
  }
  childlazy() {
    this.router.navigate(["/lazy/clazy"]);
  }
}
