import { Component } from "@angular/core";

@Component({
  selector: "app-childB",
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
   
  
      <a routerLinkActive="active" routerLink="/child/b" class="list-group-item  list-group-item-success" data-toggle="collapse" >
      Child of B
      <i class="fa fa-caret-down"></i>
    </a>
    <div class="expanded" id="demoB">
      <a routerLinkActive="active" routerLink="/child/b/b" class="list-group-item">Child B > b</a>
      <a routerLinkActive="active" routerLink="/child/b/123" class="list-group-item">Child B > ID</a>

    </div>

    </ul>
  </div>
  </nav>
    <br>
    <router-outlet></router-outlet>
    `
})
export class ChildBComponent {}
