import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-childA",
  template: `
    <h3>Child A Component</h3>
    <button type="button" class="btn btn-success" (click)="urlCheck()"> See URL </button>
    <router-outlet></router-outlet>
    `
})
export class ChildAComponent {
  constructor(private router: Router) {}
  urlCheck() {
    console.log(this.router.url);
    alert(this.router.url);
  }
}
