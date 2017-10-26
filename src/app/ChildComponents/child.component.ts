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
        <li class="nav-item">
          <a class="nav-link" routerLink="/child/a" (click)="showA()" routerLinkActive="active">Child A</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/child/b" (click)="showB()" routerLinkActive="active">Child B</a>
        </li>


      </ul>
    </div>
  </nav> 
  <nav *ngIf="!val"  class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
   
      <li class="nav-item">
        <a class="nav-link" routerLink="/child/a/b" routerLinkActive="active">Child AB</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" routerLink="/child/a/123" routerLinkActive="active">Child A ID</a>
      </li>

    </ul>
  </div>
</nav> 

  <nav *ngIf="val"  class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
   
      <li class="nav-item">
        <a class="nav-link" routerLink="/child/b/b" routerLinkActive="active">Child BB</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" routerLink="/child/b/123" routerLinkActive="active">Child B ID</a>
      </li>

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
