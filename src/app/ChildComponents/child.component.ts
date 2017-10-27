import { Component } from "@angular/core";

@Component({
  selector: "app-child",
  template: `
    <h3>Child Component</h3>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
     
    
        <a  routerLink="/child/a" routerLinkActive="active" class="list-group-item  list-group-item-success" data-toggle="collapse">
        Child of A
        <i class="fa fa-caret-down"></i>
      </a>
       
      <a routerLink="/child/b" routerLinkActive="active" class="list-group-item  list-group-item-success" data-toggle="collapse">
        Child of B
        <i class="fa fa-caret-down"></i>
      </a>
      </ul>
    </div>
    </nav>
    
 
    <router-outlet></router-outlet>
    `
})
export class ChildComponent {
  val: boolean;

  showB() {
    this.val = true;
  }

  showA() {
    this.val = false;
  }
}
// <ul class="navbar-nav mr-auto">

//    <a href="#demo6" class="list-group-item  list-group-item-success" data-toggle="collapse">
//    Child of A
//    <i class="fa fa-caret-down"></i>
//  </a>
//  <div class="collapse" id="demo6">
//    <a routerLinkActive="active" routerLink="/child/a/b" class="list-group-item">Child A > a</a>
//    <a routerLinkActive="active" routerLink="/child/a/123" class="list-group-item">Child A > ID</a>

//  </div>

//  <a href="#demo16" class="list-group-item  list-group-item-success" data-toggle="collapse">
//    Child of B
//    <i class="fa fa-caret-down"></i>
//  </a>
//  <div class="collapse" id="demo16">
//    <a routerLinkActive="active" routerLink="/child/b/b" class="list-group-item">Child B > b</a>
//    <a routerLinkActive="active" routerLink="/child/b/123" class="list-group-item">Child B > ID</a>

//  </div>

//  </ul>
