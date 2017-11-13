import { Component } from "@angular/core";
import { AuthService } from "./../projectscomponent/auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

interface Credentials {
  username: string;
  password: string;
}
// <form #f="ngForm" (ngSubmit)="onLogin(f.value)" *ngIf="!auth.loggedIn()">

@Component({
  selector: "app-login",
  styles: [
    `.submitted {
  border: 1px solid red;}
  .submittedgreen {
    border: 1px solid green;}`
  ],
  template: `
<div class="row">
<div class="col-sm-6">
    <form #f="ngForm" (ngSubmit)="onLogin(f.value)">
    <br>
    <br>
      <input type="text" (change)="changeVal(username)" [class.submitted]="isUserError"  placeholder="username" #username="ngModel" class="form-control" required name="username" ngModel ngControl="username">
      <br>
      <div *ngIf="f.submitted && !username.valid" class="alert alert-danger">
      <!-- <div [hidden]="!heroForm.submitted || (name.valid || name.pristine)" class="alert alert-danger"> -->
      Name is required
    </div>
   
      <input [class.submitted]="isPassError" (change)="changePassVal(password)" type="password" placeholder="password" #password="ngModel" name="password" minlength="3" maxLength="24" required  class="form-control" ngModel ngControl="password">
      <br>
      <div *ngIf="f.submitted && !password.valid" class="alert alert-danger">
      <!-- <div [hidden]="!heroForm.submitted || (name.valid || name.pristine)" class="alert alert-danger"> -->
      Choose password between 3 to 24 characters
    </div>
    <br>
    <div *ngIf="isError" class="alert alert-danger">
    <!-- <div [hidden]="!heroForm.submitted || (name.valid || name.pristine)" class="alert alert-danger"> -->
    {{errorText}}
  </div>
  <br>
      <button type="submit">Submit</button>
      <br>
      <br>
      <br>
      
      <div *ngIf="isSuccess" class="alert alert-success">
      <!-- <div [hidden]="!heroForm.submitted || (name.valid || name.pristine)" class="alert alert-danger"> -->
      User Logged in successfully
    </div>
      </form>
      </div>
      </div>
  `
})
export class LoginComponent {
  credentials: Credentials;
  isError: boolean;
  isSuccess: boolean;
  isPassError: boolean;
  isUserError: boolean;
  errorText = "";
  constructor(private auth: AuthService, private http: HttpClient) {}
  //   showError(): boolean
  // {if(this.isError === true && username.valid)
  //  return true;
  //  else return false

  // }
  changeVal(username) {
    console.log("value changed");
    console.log(username);
    if (username.valid) this.isUserError = false;
  }
  changePassVal(password) {
    console.log("value changed");
    console.log(password);
    if (password.valid) this.isPassError = false;
  }
  onLogin(credentials) {
    // let url = "http://localhost:3000/users/login"

    const abc = this.http
      .post(
        "http://localhost:3000/api/Users/login",
        {
          username: credentials.username,
          password: credentials.password
        }
        // ,
        // {
        //   headers: new HttpHeaders().set("Authorization", "my-auth-token")
        // }
      )
      .subscribe(
        data => {
          // console.log("tokenKey", data["id"]);
          console.log(data);
          localStorage.setItem("id_token", JSON.stringify(data));
          localStorage.setItem("id", data["id"]);
          localStorage.setItem("ttl", data["ttl"]);
          localStorage.setItem("userId", data["userId"]);
          this.isError = false;
          this.isSuccess = true;
          this.isUserError = false;
          this.isPassError = false;
        },
        err => {
          console.log("Something went wrong!");
          console.log(err);
          this.isError = true;
          this.errorText = "Error! Wrong credentials";
          this.isSuccess = false;
          this.isUserError = true;
          this.isPassError = true;
        }
      );

    this.auth.login(credentials);
  }
}
