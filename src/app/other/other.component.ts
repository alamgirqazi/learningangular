import { Component, OnInit } from "@angular/core";

// @Component({
//   templateUrl: './other.component.html',
//   styleUrls: ['./other.component.css']
// })
// export class OtherComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Router } from "@angular/router";
import { AuthService } from "./../projectscomponent/auth.service";

@Component({
  selector: "app-other",

  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>other component</p>
    `
})
export class OtherComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
  }

  // login() {
  //   this.message = "Trying to log in ...";

  //   this.authService.login().subscribe(() => {
  //     this.setMessage();
  //     if (this.authService.isLoggedIn) {
  //       // Get the redirect URL from our auth service
  //       // If no redirect has been set, use the default
  //       let redirect = this.authService.redirectUrl
  //         ? this.authService.redirectUrl
  //         : "/projects";

  //       // Redirect the user
  //       this.router.navigate([redirect]);
  //     }
  //   });
  // }

  // logout() {
  //   this.authService.logout();
  //   this.setMessage();
  // }
}
// <p>
//   <button (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
//   <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
// </p>
