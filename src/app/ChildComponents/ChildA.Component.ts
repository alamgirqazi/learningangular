import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-childA",
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
     
    
        <a href="#demo6" routerLinkActive="active" routerLink="/child/a" class="list-group-item  list-group-item-success" data-toggle="collapse">
        Child of A
        <i class="fa fa-caret-down"></i>
      </a>
      <div class="expanded" id="demo6">
        <a routerLinkActive="active" routerLink="/child/a/" class="list-group-item">Child A > a</a>
        <a routerLinkActive="active" routerLink="/child/a/123" class="list-group-item">Child A > ID</a>

      </div>

      </ul>
    </div>
    </nav>
    <br>
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
