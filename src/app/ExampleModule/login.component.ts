import { Component } from "@angular/core";
import { AuthService } from "./../projectscomponent/auth.service";

interface Credentials {
  username: string;
  password: string;
}
// <form #f="ngForm" (ngSubmit)="onLogin(f.value)" *ngIf="!auth.loggedIn()">

@Component({
  selector: "app-login",
  template: `
    <form #f="ngForm" (ngSubmit)="onLogin(f.value)">
    <br>
    <br>
      <input type="text" placeholder="username" #username="ngModel" class="form-control" required name="username" ngModel ngControl="username">
      <br>
      <div *ngIf="f.submitted && !username.valid" class="alert alert-danger">
      <!-- <div [hidden]="!heroForm.submitted || (name.valid || name.pristine)" class="alert alert-danger"> -->
      Name is required
    </div>
      <input type="password" placeholder="password" #password="ngModel" name="password" minlength="8" maxLength="24" required  class="form-control" ngModel ngControl="password">
      <br>
      <div *ngIf="f.submitted && !password.valid" class="alert alert-danger">
      <!-- <div [hidden]="!heroForm.submitted || (name.valid || name.pristine)" class="alert alert-danger"> -->
      Choose password between 8 to 24 characters
    </div>
      <button type="submit">Submit</button>
    
      </form>
  `
})
export class LoginComponent {
  credentials: Credentials;

  constructor(private auth: AuthService) {}

  onLogin(credentials) {
    this.auth.login(credentials);
  }
}
